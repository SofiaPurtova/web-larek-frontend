import { CardCatalogView } from "./CardCatalogView";
import { IEvents } from "../base/events";
import { IProductItem } from "../../types";

export interface ICardPreviewView {
    render(product: IProductItem): HTMLElement;
}

export class CardPreviewView extends CardCatalogView implements ICardPreviewView {
    protected image: HTMLElement;
    protected cardElement: HTMLElement;
    protected cardCategory: HTMLElement;
    protected cardTitle: HTMLElement;
    protected cardImage: HTMLImageElement;
    protected cardPrice: HTMLElement;
    protected button: HTMLButtonElement;
    selectedCard: IProductItem;
    
    constructor(template: HTMLTemplateElement, protected events: IEvents) {
        super(template, events)
    }

    render(product: IProductItem): HTMLElement {}
}