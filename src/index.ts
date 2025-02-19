import { EventEmitter } from './components/base/events';
import { BasketModel } from './components/Model/BasketModel';
import { LarekAPIModel } from './components/Model/LarekAPIModel';
import { LarekModel } from './components/Model/LarekModel';
import { Card } from './components/View/Card';
import './scss/styles.scss';
import { IProductItem } from './types';
import { pr } from './utils/constants';
import { cloneTemplate, ensureElement } from './utils/utils';
import { API_URL, CDN_URL } from './utils/constants';
import { Page } from './components/View/Page';
import { CardPreview } from './components/View/CardPreview';
import { Modal } from './components/View/Modal';
import { Basket } from './components/View/Basket';
import { BasketCard } from './components/View/BasketCard';
import { Order } from './components/View/Order';
import { OrderModel } from './components/Model/OrderModel';


const basketTemplate = document.querySelector('#basket') as HTMLTemplateElement;
const basketCardTemplate = document.querySelector('#card-basket') as HTMLTemplateElement;
const cardTemplate = document.querySelector('#card-catalog') as HTMLTemplateElement;
const cardPreviewTemplate = document.querySelector('#card-preview') as HTMLTemplateElement;
const orderTemplate = document.querySelector('#order') as HTMLTemplateElement;



const events = new EventEmitter();
const larekModel = new LarekModel(events);
const basket = new Basket(cloneTemplate(basketTemplate), events);
const basketModel = new BasketModel(events);
const page = new Page(document.querySelector('.page__wrapper'), events);
const api = new LarekAPIModel(CDN_URL, API_URL);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);
const cardPreview = new CardPreview(cloneTemplate(cardPreviewTemplate), events);
const order = new Order(cloneTemplate(orderTemplate), events);
const orderModel = new OrderModel(events);


const gallery = document.querySelector('.gallery') as HTMLElement;



api.getProductCards()
    .then(function(data: IProductItem[]) {
        larekModel.setProducts(data);
        console.log(larekModel);
    })
    .catch(err => console.log(err));

events.on('products:changed', () => {
    const cardsHTML = larekModel.getProducts().map(card => new Card(cloneTemplate(cardTemplate), events).render(card));
    page.render({
        gallery: cardsHTML
        //counter: basketModel.getCounter()
    })
});

events.on('product:select', (product: IProductItem) => {
    larekModel.setPreview(product);
});

events.on('product:open', (product: IProductItem) => {  
    cardPreview.render(product);
    modal.render({content: cardPreview.render()});
    console.log(typeof product);
});

events.on('modal:open', () => {
    modal.lock = true;
});

events.on('modal:close', () => {
    modal.lock = false;
});

events.on('product:addToTheBasket', () => {
    basketModel.addProduct(larekModel.selectedCard);
    basket.renderCounter(basketModel.getCounter());
    modal.close;
});

//Ни в какую продукты не удаляются из корзины
/*events.on('basket:changed', () => {
    const basketHTML = basketModel.getBasketProducts().map(cardBask => new BasketCard(cloneTemplate(basketCardTemplate), events).render(cardBask));
    basket.render({
        productCards: basketHTML
    })
})*/ 


events.on('basket:open', () => {
    basket.setSumm(basketModel.getFinalSumm());
    basket.productCards = basketModel.getBasketProducts().map((product, index) => {
        const basketCard = new BasketCard(cloneTemplate(basketCardTemplate), events);
        basketCard.index = index + 1;
        return basketCard.render(product);
    });
    modal.render({ content: basket.render() });
});

events.on('product:delete', ({id}: {id: string}) => {
    basketModel.deleteProduct(id);
    basket.renderCounter(basketModel.getCounter());
    basket.setSumm(basketModel.getFinalSumm());
    basket.productCards = basketModel.getBasketProducts().map((product, index) => {
        const basketCard = new BasketCard(cloneTemplate(basketCardTemplate), events);
        basketCard.index = index + 1;
        return basketCard.render(product);
    });
    modal.render({ content: basket.render() });
});

events.on('order:futherFromBasket', () => {
    modal.content = order.render();
    modal.render({content: order.render()});
    orderModel.items = basketModel.getBasketProducts().map(product => product.id);
})

events.on('paymentMethod:choose', (button: HTMLButtonElement) => { orderModel.payment = button.name});


events.on('success:close', () => {
    modal.close();
});

/*const prs = mod.getProducts();
prs.forEach(function(obj) {
    console.log('флаг1');
    const newObj = {
        category: obj.category,
        image: obj.image,
        price: obj.price,
        title: obj.title
    }
    gallery.append(card1.render(newObj));
});




const card1 = new Card(cloneTemplate(cardTemplate), events);

/*const obj1 = {
    category: 'софт-скил',
    image: '/5_Dots.svg',
    price: 759,
    title: '+1 час в сутках'
}
//gallery.append(card1.render(obj1));
 pr.forEach(function(obj) {
    gallery.append(card1.render(obj));
});*/



/*basket.setProducts(pr);
console.log(basket);
// console.log(basket.getBasketProduct('b06cde61-912f-4663-9751-09956c0eed67'));
basket.addProduct({
    "id": "90973ae5-285c-4b6f-a6d0-65d1d760b102",
    "description": "Сжимайте мячик, чтобы снизить стресс от тем по бэкенду.",
    "image": "/Mithosis.svg",
    "title": "Бэкенд-антистресс",
    "category": "другое",
    "price": 1000
});
console.log(basket);*/