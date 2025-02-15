import { ensureAllElements, ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { EventEmitter } from "../base/events";

export interface IOrder {
    paymentMethod: string;
    address: HTMLElement;
    formErrors: HTMLElement;
}

export class Order extends Component<IOrder> {
    protected orderButtons: HTMLButtonElement[];
    protected orderAddress: HTMLElement;
    protected orderButton: HTMLButtonElement;
    protected formErrors: HTMLElement;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.orderButtons = ensureAllElements('.button_alt', this.container) as HTMLButtonElement[];
        this.orderAddress = ensureElement('.form__input', this.container) as HTMLElement;
        this.orderButton = ensureElement('.order__button', this.container) as HTMLButtonElement;
        this.formErrors = ensureElement('.form__errors', this.container) as HTMLElement;
        this.orderButtons.forEach((button) => {button.addEventListener('click', () => this.events.emit('choose:payment'));});
    }

    set paymentMethod(paymentMethod: string) {
        //...
    }
    set address(value: string) {
        this.setText(this.orderAddress, value);
    }

    set validation(value: boolean) {
        this.orderButton.disabled = !value;
    }


}