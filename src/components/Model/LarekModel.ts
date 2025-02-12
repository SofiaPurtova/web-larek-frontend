import { IProductItem, IBasket } from "../../types";

// Модель главной страницы ларька. Необходимо:
// - ввыводить карточки
// - открывать модальное окно карточки
// - открывать модальное окно корзины
export interface ILarekModel {
    products: IProductItem[];
    openModal(data: IProductItem): IProductItem;
    openBasket(): IBasket;
}

export class LarekModel implements ILarekModel {
    protected _products: IProductItem[];

    constructor() {
        this._products = [];
    }

    set products(data: IProductItem): IProductItem[] {}

    get products(): IProductItem[] {}

    openModal(data: IProductItem): IProductItem {} 

    openBasket(): IBasket {} 
}
