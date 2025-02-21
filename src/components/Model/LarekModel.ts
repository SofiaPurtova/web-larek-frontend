import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface ILarekModel {
    // products: IProductItem[];
    setProducts(products: IProductItem[]): void;
    getProducts(): IProductItem[];
    getProduct(id: string): IProductItem;
}

export class LarekModel implements ILarekModel {
    protected productCards: IProductItem[] = [];
    selectedCard: IProductItem;

    constructor(protected events: IEvents) {}

    setProducts(products: IProductItem[]) {
        this.productCards = products;
        this.events.emit('products:changed');
    }

    getProducts(): IProductItem[] {
        return this.productCards;
    }

    getProduct(id: string): IProductItem {
        return this.productCards.find(product => product.id === id);
    }

    setPreview(product: IProductItem) {
        this.selectedCard = product;
        this.events.emit('product:open', /*product*/ {id: product.id});
    }
}
