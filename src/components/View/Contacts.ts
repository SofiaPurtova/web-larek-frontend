import { ensureAllElements, ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { EventEmitter } from "../base/events";

export interface IOrder {
    inputFields: HTMLInputElement[];
    button: HTMLButtonElement;
    formErrors: HTMLElement;
}

export class Contacts extends Component<IOrder> {
    protected inputs: HTMLElement[];
    protected orderButton: HTMLButtonElement;
    protected contactsForm: HTMLElement;
    formErrors: HTMLElement;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.contactsForm = this.container;
        this.inputs = Array.from(ensureAllElements('.form__input', this.container) as HTMLElement[]);
        this.orderButton = ensureElement('.button', this.container) as HTMLButtonElement;
        this.formErrors = ensureElement('.form__errors', this.container) as HTMLElement;

        this.inputs.forEach(fiel => {
            fiel.addEventListener('input', (evt) => {
                const target = evt.target as HTMLInputElement;
                const field = target.name;
                const value = target.value;
                this.events.emit('contacts:change', { field, value });
            });
        });

        this.contactsForm.addEventListener('submit', (evt: Event) => {
            evt.preventDefault();
            this.events.emit('success:open');
        });
    }

    set validation(value: boolean) {
        this.orderButton.disabled = !value;
    }


}