/*import { Component } from "../base/Component";
import { EventEmitter } from "../base/events";

export interface IBasketCard {
    index: number;
    title: HTMLElement;
    price: number;
    delete: HTMLButtonElement;
}

export class BasketCard extends Component<IBasketCard> {
    protected productIndex: HTMLElement;
    protected productTitle: HTMLElement;
    protected productPrice: HTMLElement;
    protected deleteButton: HTMLButtonElement;

    constructor(container: HTMLElement, protected enents: EventEmitter) {
        super(container);
        // ...
        this.deleteButton.addEventListener('click', () => this.events.emit('product:delete', {index: this.productIndex}));
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

    set button(data: HTMLButtonElement) {
        // ...
    }

}*/