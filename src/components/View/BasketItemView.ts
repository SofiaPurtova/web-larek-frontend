import { IEvents } from "../base/events";
import { IProductItem } from "../../types";

export interface IBasketItemView {
    render(product: IProductItem, item: number): HTMLElement;
}

export class BasketItemView implements IBasketItemView {
    protected index:HTMLElement;
    protected title: HTMLElement;
    protected price: HTMLElement;
    protected basketItemDelete: HTMLButtonElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    render(product: IProductItem, item: number): HTMLElement {};
}