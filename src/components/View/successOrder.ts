import { IEvents } from "../base/events";

export interface IsuccessOrder {
    render(): HTMLElement;
}

export class successOrder implements IsuccessOrder{
    protected modalContainer: HTMLElement;
    protected successTitle: HTMLElement;
    protected successDescription: HTMLElement;
    protected closeButton: HTMLButtonElement;
    protected button: HTMLButtonElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    render(): HTMLElement;
}