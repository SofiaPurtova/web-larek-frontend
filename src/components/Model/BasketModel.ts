import { IProductItem, IBasket } from "../../types";

// Модель данных для корзины. Необходимо: 
// - удалять/добавлять товар 
// - получать итоговую сумму заказа
export interface IBasketModel {
    basketProducts: IProductItem[];
    addProduct(product: IProductItem): void;
    deleteProduct(product: IProductItem): void;
    getFinalSumm(): number;
    selectedProduct: IProductItem;
}

export class BasketModel implements IBasketModel {    
    constructor() {
        this._basketProducts = [];
    }

    set selectedProduct(product: IProductItem)

    set BasketProducts(products: IProductItem[]) {}
    get BasketProducts() {}
    
    addProduct(product: IProductItem) {}
    deleteProduct(product: IProductItem) {}
    getFinalSumm(): number {}
}