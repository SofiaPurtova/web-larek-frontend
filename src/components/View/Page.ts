import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { EventEmitter } from "../base/events";

export interface IPage {
    gallery: HTMLElement[]; // это просто контейнер, хранящий в себе кнопки-карточки
    //basket: HTMLButtonElement;
    //counter: number;
}

export class Page extends Component<IPage> implements IPage{
    protected headerBasket: HTMLButtonElement;
    //protected headerBasketCounter: HTMLElement;
    protected galleryContainer: HTMLElement;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.headerBasket = ensureElement('.header__basket',  this.container) as HTMLButtonElement;
        //this.headerBasketCounter = this.headerBasket.querySelector('.header__basket-counter');
        this.galleryContainer = ensureElement('.gallery') as HTMLElement;

        this.headerBasket.addEventListener('click', () => this.events.emit('basket:open'));
    }

    set gallery(products: HTMLButtonElement[]) {
        this.galleryContainer.replaceChildren(...products);
    }

}