import { ensureAllElements, ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export interface IOrder {
    paymentMethod: string;
    address: HTMLElement;
    formErrors: HTMLElement;
    button: HTMLButtonElement
    buttons: HTMLButtonElement[]
}

export class Order extends Component<IOrder> {
    protected orderButtons: HTMLButtonElement[];
    protected orderForm: HTMLElement;
    protected orderButton: HTMLButtonElement;
    formErrors: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        this.orderButtons = Array.from(ensureAllElements('.button_alt', this.container) as HTMLButtonElement[]);
        this.orderForm = this.container;//ensureElement('.form', this.container) as HTMLFormElement;
        this.orderButton = ensureElement('.order__button', this.container) as HTMLButtonElement;
        this.formErrors = ensureElement('.form__errors', this.container) as HTMLElement;
        
        this.orderButtons.forEach(button => {
            button.addEventListener('click', () => {
                //this.events.emit('choose:payment'));
                this.paymentMethod = button.name;
                events.emit('paymentMethod:choose', button);
            });
        });

        this.orderForm.addEventListener('input', (evt: Event) => {
            const target = evt.target as HTMLInputElement;
            const field = target.name;
            const value = target.value;
            this.events.emit('order:inputAddress', {field, value});
        })

        this.orderForm.addEventListener('submit', (evt: Event) => {
            evt.preventDefault();
            this.events.emit('contacts:unblock');
        })
    }

    set paymentMethod(payMethod: string) {
        this.orderButtons.forEach(but => {
            but.classList.toggle('button_alt-active', but.name === payMethod);
        })
    }

    set validation(value: boolean) {
        this.orderButton.disabled = !value;
    }
}