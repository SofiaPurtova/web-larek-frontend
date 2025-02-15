import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";

export interface ISuccessOrder {
    dedescription: HTMLElement;
    button: HTMLButtonElement;
}

export class SuccessOrder extends Component<ISuccessOrder> {
    protected successDescription: HTMLElement;
    protected successButton: HTMLButtonElement;

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        this.successDescription = ensureElement('.oreder-success__description', this.container) as HTMLElement;
        this.successButton = ensureElement('.order-success__close', this.container) as HTMLButtonElement;

        this.successButton.addEventListener('click', () => this.events.emit('success:close'));
    }

    set description(value: number) {
        this.setText(this.successDescription, `Списано ${value} синапсов`);
    }

    set button(data: HTMLButtonElement) {
        // ...
        //this.events.emit('success:close');
    }
}