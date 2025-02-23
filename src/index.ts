import { EventEmitter } from './components/base/events';
import { BasketModel } from './components/Model/BasketModel';
import { LarekAPIModel } from './components/Model/LarekAPIModel';
import { LarekModel } from './components/Model/LarekModel';
import { Card } from './components/View/Card';
import './scss/styles.scss';
import { IOrderForm, IProductItem } from './types';
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
import { Contacts } from './components/View/Contacts';
import { SuccessOrder } from './components/View/SuccessOrder';
// Очень странно, у меня в папке проекта SuccesssOrder написано с большой буквы, никаких ошибок нет


const basketTemplate = document.querySelector('#basket') as HTMLTemplateElement;
const basketCardTemplate = document.querySelector('#card-basket') as HTMLTemplateElement;
const cardTemplate = document.querySelector('#card-catalog') as HTMLTemplateElement;
const cardPreviewTemplate = document.querySelector('#card-preview') as HTMLTemplateElement;
const orderTemplate = document.querySelector('#order') as HTMLTemplateElement;
const contactsTemplate = document.querySelector('#contacts') as HTMLTemplateElement;
const succesTemplate = document.querySelector('#success') as HTMLTemplateElement;

const api = new LarekAPIModel(CDN_URL, API_URL);
const events = new EventEmitter();
const larekModel = new LarekModel(events);
const basket = new Basket(cloneTemplate(basketTemplate), events);
const basketModel = new BasketModel(events);
const page = new Page(document.querySelector('.page__wrapper'), events);
const modal = new Modal(ensureElement<HTMLElement>('#modal-container'), events);
const cardPreview = new CardPreview(cloneTemplate(cardPreviewTemplate), events);
const order = new Order(cloneTemplate(orderTemplate), events);
const orderModel = new OrderModel(events);
const contacts = new Contacts(cloneTemplate(contactsTemplate), events);



api.getProductCards()
    .then(function(data: IProductItem[]) {
        larekModel.setProducts(data);
    })
    .catch(err => console.log(err));

events.on('products:changed', () => {
    const cardsHTML = larekModel.getProducts().map(card => new Card(cloneTemplate(cardTemplate), events).render(card));
    page.render({
        gallery: cardsHTML
    })
});

events.on('product:select', ({id}: {id: string}) => {
    larekModel.setPreview(larekModel.getProduct(id));
});

events.on('product:open', ({id}: {id: string}) => {  
    cardPreview.setCardButtonValue(larekModel.getProduct(id));

    if (basketModel.isInTheBasket(id)) {
        cardPreview.setTextForButton(id, 'Убрать');
    } else {
        cardPreview.setTextForButton(id, 'Купить');
    }
    
    modal.content = cardPreview.render(larekModel.getProduct(id));
    modal.render({content: cardPreview.render()});
});

events.on('product:clickButton', ({id}: {id: string}) => {
    if (basketModel.isInTheBasket(id)) {
        basketModel.deleteProduct(id);
    } else {
        basketModel.addProduct(larekModel.getProduct(id));
    }
    basket.renderCounter(basketModel.getCounter());
});

events.on('modal:open', () => {
    modal.lock = true;
});

events.on('modal:close', () => {
    modal.lock = false;
});

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
});

events.on('paymentMethod:choose', (button: HTMLButtonElement) => { orderModel.payment = button.name});

events.on('order:inputAddress', (inf: {field: string, value: string}) => {
    orderModel.setAddress(inf.field, inf.value);
});

events.on('formErrors:address', (err: Partial<IOrderForm>) => {
    const {address, payment} = err;
    order.validation = !address && !payment;
    const errors = [];
    const values = Object.values({address, payment});

    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            errors.push(values[i]);
        }
    }
    order.formErrors.textContent = errors.join('; ');    
});

events.on('contacts:unblock', () => {
    orderModel.total = basketModel.getFinalSumm();
    modal.content = contacts.render();
    modal.render({content: contacts.render()});
});

events.on('contacts:change', (data: {field: string, value: string}) => {
    orderModel.setEmailAndTelephone(data.field, data.value);
});

events.on('formErrors:emailAndTelephone', (err: Partial<IOrderForm>) => {
    const { email, phone} = err;
    contacts.validation = !email && !phone;
    
    const errors = [];
    const values = Object.values({phone, email});

    for (let i = 0; i < values.length; i++) {
        if (values[i]) {
            errors.push(values[i]);
        }
    }
    contacts.formErrors.textContent = errors.join('; ');  
});

events.on('success:open', () => {
    api.postOrder(orderModel.getReadyOrder())
    .then((data) => {
        //console.log(data);
        const success = new SuccessOrder(cloneTemplate(succesTemplate), events);
        success.setDescription(basketModel.getFinalSumm());
        modal.content = success.render();
        basketModel.deleteAllProducts();
        basket.renderCounter(basketModel.getCounter());
        modal.render({content: success.render()});
        //sorderModel.reset();
    })
    .catch(err => console.log(err));
})

events.on('success:close', () => {
    modal.close();
});
