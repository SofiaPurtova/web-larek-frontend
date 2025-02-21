import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export interface ISuccessOrder {
    description: HTMLElement;
    button: HTMLButtonElement;
}

export class SuccessOrder extends Component<ISuccessOrder> {
    protected successDescription: HTMLElement;
    protected successButton: HTMLButtonElement;
    protected successForm: HTMLElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        this.successForm = this.container;
        this.successDescription = ensureElement('.order-success__description', this.container) as HTMLElement;
        this.successButton = ensureElement('.order-success__close', this.container) as HTMLButtonElement;

        this.successButton.addEventListener('click', () => this.events.emit('success:close'));
    }

    setDescription(value: number) {
        this.setText(this.successDescription, `Списано ${value} синапсов`);
    }
}