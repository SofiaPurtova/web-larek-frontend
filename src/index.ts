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


const events = new EventEmitter();
const mod = new LarekModel(events);

const api = new LarekAPIModel(CDN_URL, API_URL);

api.getProductCards()
    .then(function(data: IProductItem[]) {
        mod.setProducts(data);
        console.log(mod);
    })
    .catch(err => console.log(err));

const cardTemplate = document.querySelector('#card-catalog') as HTMLTemplateElement;
const gallery = document.querySelector('.gallery') as HTMLElement;

/*const card1 = new Card(cloneTemplate(cardTemplate), events);

card1.category = 'софт-скил';
card1.image = '/5_Dots.svg';
card1.price = String(750);
card1.title = '+1 час в сутках';
{
        "id": "854cef69-976d-4c2a-a18c-2aa45046c390",
        "description": "Если планируете решать задачи в тренажёре, берите два.",
        "image": "/5_Dots.svg",
        "title": "+1 час в сутках",
        "category": "софт-скил",
        "price": 750
    } */

//gallery.append(card1.render());

/*mod.getProducts().forEach((pr) => {
    const i = new Card(cloneTemplate(cardTemplate), events);
    i.category = pr.category;
    i.image = pr.image;
    i.price = String(pr.price);
    i.title = pr.title;
    gallery.append(i.render());
})*/

//const k = mod.getProduct('412bcf81-7e75-4e70-bdb9-d3c73c9803b7');
//console.log(k);
/*const cardTemplate = document.querySelector('.card-catalog') as HTMLTemplateElement;

events.on('products:changed', () => {})





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