import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

// Модель данных для корзины. Необходимо: 
// - удалять/добавлять товар 
// - получать итоговую сумму заказа
export interface IBasketModel {
    addProduct(product: IProductItem): void;
    deleteProduct(id: string): void;
    getBasketProducts(): IProductItem[];
    getBasketProduct(id: string): IProductItem;
    getFinalSumm(): number;
    deleteAllProducts(): void;
    setBasketProducts(products: IProductItem[]): IProductItem[];
}

export class BasketModel implements IBasketModel {  
    protected basketProducts: IProductItem[]  = []; 

    constructor(protected events: IEvents) {}

    addProduct(product: IProductItem) {
        this.basketProducts.push(product);
        this.events.emit('products:changed');
    }

    deleteProduct(id: string) {
        this.basketProducts = this.basketProducts.filter(product => product.id !== id);
        this.events.emit('products:changed');
    }
    
    getBasketProducts(): IProductItem[] {
        return this.basketProducts;
    }

    getBasketProduct(id: string): IProductItem {
        return this.basketProducts.find(product => product.id === id);
    }

    getFinalSumm(): number {
        let tempSumm = 0;
        this.basketProducts.forEach(product=> {
            tempSumm = tempSumm + product.price;
        });
        return tempSumm;
    }

    deleteAllProducts() {
        this.basketProducts = [];
        this.events.emit('products:changed');
    }

    setBasketProducts(products: IProductItem[]): IProductItem[] {
        this.basketProducts = products;
    }    
}