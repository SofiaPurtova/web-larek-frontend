/*import { ensureAllElements, ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { EventEmitter } from "../base/events";

export interface IOrder {
    inputFields: HTMLInputElement[];
    button: HTMLButtonElement;
    formErrors: HTMLElement;
}

export class Order extends Component<IOrder> {
    protected inputs: HTMLInputElement[];
    protected orderButton: HTMLButtonElement;
    protected formErrors: HTMLElement;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.inputs = ensureAllElements('.form__input') as HTMLElement[];
        this.orderButton = ensureElement('.button', this.container) as HTMLButtonElement;
        this.formErrors = ensureElement('.form__errors', this.container) as HTMLElement;

        this.inputs.forEach((input) => {
            input.addEventListener('input', () => this.events.emit('contacts:change'))
        })
        this.orderButton.addEventListener('click', () => this.events.emit('success:open'));
    }

    set inputFields(value: string) {
        // ...
    }

    set validation(value: boolean) {
        this.orderButton.disabled = !value;
    }


}*/