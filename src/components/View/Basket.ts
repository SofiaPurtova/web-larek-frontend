/*import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { EventEmitter } from "../base/events";

export interface IBasket {
    productCards: HTMLElement[];
    button: HTMLButtonElement;
    summ: number;
}

export class Basket extends Component<IBasket> {
    protected basketList: HTMLElement;
    protected basketButton: HTMLButtonElement;
    protected basketSumm: HTMLElement;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.basketList = ensureElement('.basket__list', this.container) as HTMLElement;
        this.basketButton = ensureElement('.basket__button', this.container) as HTMLButtonElement;
        this.basketSumm = ensureElement('.basket__price', this.container) as HTMLElement;

        this.basketButton.addEventListener('click', () => this.events.emit('order:futher');
    }

    set productCards(products: HTMLElement[]) {
        this.basketList.replaceChildren(...products);
    }

    set button(data: HTMLButtonElement) {
        // ...
    }

    set summ(value: number) {
        this.setText(this.basketSumm, `${value} синапсов`);
    }
}*/