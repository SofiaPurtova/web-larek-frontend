import { IEvents } from "../base/events";

export interface IOrderViewSecondStep {
    enterEmail(value: string): void;
    enterPhoneNumber(value: string): void;
    togglePayButton(): void;
    render(): HTMLElement;
}

export class OrderViewSecondStep implements IOrderViewSecondStep{
    protected form: HTMLFormElement;
    protected closeButton: HTMLButtonElement;
    protected emailInput: HTMLInputElement;
    protected telephoneInput: HTMLInputElement;
    protected payButton: HTMLButtonElement;
    protected errorMessage: HTMLElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}
    enterEmail(value: string) {}
    enterPhoneNumber(value: string) {}
    togglePayButton() {}
    render(): HTMLElement {}
}