import { IProductItem } from "../../types";

// Модель главной страницы ларька. Необходимо:
// - ввыводить карточки
// - открывать модальное окно карточки
// - открывать модальное окно корзины
export interface ILarekModel {
    setProducts(products: IProductItem[]): IProductItem[];
    getProducts(): IProductItem[];
    getProduct(id: string): IProductItem;
}

export class LarekModel implements ILarekModel {
    protected productCards: IProductItem[] = [];

    constructor() {}

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
