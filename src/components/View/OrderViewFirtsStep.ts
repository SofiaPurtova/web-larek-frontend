import { IEvents } from "../base/events";

export interface IOrderViewFirtsStep {
    choosePaymentMethod(paymentMethod: string): void;
    enterAddress(value: string): void;
    toggleNextButton(): void;
    render(): HTMLElement {}
}

export class OrderViewFirtsStep implements IOrderViewFirtsStep{
    protected form: HTMLFormElement;
    protected closeButton: HTMLButtonElement;
    protected paymentButtons: HTMLButtonElement[];
    protected addressInput: HTMLInputElement;
    protected nextButton: HTMLButtonElement;
    protected errorMessage: HTMLElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}
    
    choosePaymentMethod(paymentMethod: string) {}
    enterAddress(value: string) {}
    toggleNextButton() {}
    render(): HTMLElement {}
}