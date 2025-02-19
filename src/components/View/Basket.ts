import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export interface IBasket {
    productCards: HTMLElement[];
    //button: HTMLButtonElement;
    //setSumm(): HTMLElement;
}

export class Basket extends Component<IBasket> {
    protected basketList: HTMLElement;
    protected basketButton: HTMLButtonElement;
    protected basketSumm: HTMLElement;

    protected headerBasket: HTMLElement;
    protected basketCounter: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        this.basketList = ensureElement('.basket__list', this.container) as HTMLElement;
        this.basketButton = ensureElement('.basket__button', this.container) as HTMLButtonElement;
        this.basketSumm = ensureElement('.basket__price', this.container) as HTMLElement;

        this.headerBasket = document.querySelector('.header__basket');
        this.basketCounter = document.querySelector('.header__basket-counter');

        this.headerBasket.addEventListener('click', () => this.events.emit('basket:open'));
        this.basketButton.addEventListener('click', () => this.events.emit('order:futherFromBasket'));
    }

    set productCards(products: HTMLElement[]) {
        this.basketList.replaceChildren(...products);
    }

    /*set button(data: HTMLButtonElement) {
        // ...
    }*/

    setSumm(value: number) {
        this.setText(this.basketSumm, `${value} синапсов`);
    }

    renderCounter(value: number) {
        this.setText(this.basketCounter, value);
    }
}