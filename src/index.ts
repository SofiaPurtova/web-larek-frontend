/*import { EventEmitter } from './components/base/events';
import { BasketModel } from './components/Model/BasketModel';
// import { LarekAPIModel } from './components/Model/LarekAPIModel';
import { Card } from './components/View/Card';
import './scss/styles.scss';
import { pr } from './utils/constants';
//import { API_URL, CDN_URL, pr } from './utils/constants';
import { cloneTemplate } from './utils/utils';


const events = new EventEmitter();
const basket = new BasketModel(events);
basket.setBasketProducts(pr);
const cardTemplate = document.querySelector('.card-catalog') as HTMLTemplateElement;

events.on('products:changed', () => {})

// const api = new LarekAPIModel(CDN_URL, API_URL);

/*api.getProductCards()
.then(data => {
    basket.setBasketProducts(data)
    console.log(basket)
})*/



/*const gallery = document.querySelector('.gallery') as HTMLElement;
const card1 = new Card(cloneTemplate(cardTemplate)); // почему-то не работает, хотя все как у Сергея

const obj1 = {
    id: '412bcf81-7e75-4e70-bdb9-d3c73c9803b7', 
    category: 'дополнительное',    
    image: '/Soft_Flower.svg',
    title: 'Фреймворк куки судьбы',
    price: 2500
}

gallery.append(card1.render(obj1));
console.log(gallery);*/


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