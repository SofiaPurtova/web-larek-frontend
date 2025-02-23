import { createElement, ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export interface IBasket {
    productCards: HTMLElement[];
    setSumm(): HTMLElement;
}

export class Basket extends Component<IBasket> {
    protected basketList: HTMLElement;
    protected basketButton: HTMLButtonElement;
    protected basketSumm: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        this.basketList = ensureElement('.basket__list', this.container) as HTMLElement;
        this.basketButton = ensureElement('.basket__button', this.container) as HTMLButtonElement;
        this.basketSumm = ensureElement('.basket__price', this.container) as HTMLElement;

        this.basketButton.addEventListener('click', () => this.events.emit('order:futherFromBasket'));
    }

    set productCards(products: HTMLElement[]) {
        if (products.length > 0) {
            this.basketList.replaceChildren(...products);
            this.basketButton.removeAttribute('disabled');
        } else {
            this.basketButton.setAttribute('disabled', 'disabled');
            this.basketList.replaceChildren(createElement<HTMLParagraphElement>('p', {textContent: 'Корзина пуста'}));
        }
    }

    setSumm(value: number) {
        this.setText(this.basketSumm, `${value} синапсов`);
    }

    abilityToFuther(value: number) {
        if (value > 0) {
            this.basketButton.setAttribute('disabled', 'true');
        } else {
            this.basketButton.removeAttribute('disabled');
        }
    }
}