import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

// Модель главной страницы ларька. Необходимо:
// - ввыводить карточки
// - открывать модальное окно карточки
// - открывать модальное окно корзины
export interface ILarekModel {
    // products: IProductItem[];
    setProducts(products: IProductItem[]): IProductItem[];
    getProducts(): IProductItem[];
    getProduct(id: string): IProductItem;
}

export class LarekModel implements ILarekModel {
    protected productCards: IProductItem[] = [];

    constructor(protected events: IEvents) {}

    /*set products(data: IProductItem[]) {
        this.productCards = data;
        this.events.emit('productCards:changed');
    }

    get products() {
        return this.productCards;
    }*/

    setProducts(products: IProductItem[]): IProductItem[] {
        this.productCards = products;
    }

    getProducts(): IProductItem[] {
        return this.productCards;
    }

    getProduct(id: string): IProductItem {
        return this.productCards.find(product => product.id === id);
    }

}
