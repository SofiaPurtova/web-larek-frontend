import { IEvents } from "../base/events";

export interface IBasketView {
    summOfAllProducts(): number;
    render(): HTMLElement;
}

export class BasketView implements IBasketView {
    protected basket: HTMLElement;
    protected title: HTMLElement;
    protected basketList: HTMLElement;
    protected button: HTMLButtonElement;
    protected basketPrice: HTMLElement;
    protected closeButton: HTMLButtonElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    set items(items: HTMLElement[]) {}
    summOfAllProducts(): number {}
    render(basket: HTMLElement): HTMLElement {}
}