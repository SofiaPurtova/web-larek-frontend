import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export interface IBasketCard {
    index: number;
    title: string;
    price: number;
    delete: HTMLButtonElement;
    id: string;
}

export class BasketCard extends Component<IBasketCard> {
    protected productIndex: HTMLElement;
    protected productTitle: HTMLElement;
    protected productPrice: HTMLElement;
    protected deleteButton: HTMLButtonElement;
    protected cardId: string;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        this.productIndex = ensureElement('.basket__item-index', this.container) as HTMLElement;
        this.productTitle = ensureElement('.card__title', this.container) as HTMLElement;
        this.productPrice = ensureElement('.card__price', this.container) as HTMLElement;
        this.deleteButton = ensureElement('.basket__item-delete', this.container) as HTMLButtonElement;

        this.deleteButton.addEventListener('click', () => this.events.emit('product:delete', {index: this.cardId}));
    }

    set index(value: number) {
        this.setText(this.productIndex, value);
    }

    set title(value: string) {
        this.setText(this.productTitle, value);
    }

    set price(value: number) {
        this.setText(this.productPrice, `${value} синапсов`);
    }

    /*set button(data: HTMLButtonElement) {
        // ...
    }*/

    set id(value: string) {
        this.id = value;
    }

}