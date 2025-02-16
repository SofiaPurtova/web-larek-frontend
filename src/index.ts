import { EventEmitter } from './components/base/events';
import { BasketModel } from './components/Model/BasketModel';
import { LarekAPIModel } from './components/Model/LarekAPIModel';
import { LarekModel } from './components/Model/LarekModel';
import { Card } from './components/View/Card';
import './scss/styles.scss';
import { IProductItem } from './types';
import { pr } from './utils/constants';
import { cloneTemplate } from './utils/utils';
import { API_URL, CDN_URL } from './utils/constants';
import { Page } from './components/View/Page';


const events = new EventEmitter();
const larekModel = new LarekModel(events);
const basket = new BasketModel(events);
const page = new Page(document.querySelector('.page__wrapper'), events);

const api = new LarekAPIModel(CDN_URL, API_URL);
const cardTemplate = document.querySelector('#card-catalog') as HTMLTemplateElement;
const gallery = document.querySelector('.gallery') as HTMLElement;


api.getProductCards()
    .then(function(data: IProductItem[]) {
        larekModel.setProducts(data);
        console.log(larekModel);
        console.log('флаг');
    })
    .catch(err => console.log(err));

events.on('products:changed', () => {
    const cardsHTML = larekModel.getProducts().map(card => new Card(cloneTemplate(cardTemplate), events).render(card));
    page.render({
        gallery: cardsHTML,
        counter: basket.getCounter()
    })
})

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