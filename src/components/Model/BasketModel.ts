import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface IBasketModel {
    addProduct(product: IProductItem): void;
    deleteProduct(id: string): void;
    getBasketProducts(): IProductItem[];
    getBasketProduct(id: string): IProductItem;
    getFinalSumm(): number;
    deleteAllProducts(): void;
    setBasketProducts(products: IProductItem[]): void;
}

export class BasketModel implements IBasketModel {  
    protected basketProducts: IProductItem[]  = []; 

    constructor(protected events: IEvents) {}

    isInTheBasket(id: string) {
        return this.basketProducts.some(item => item.id === id);
    }

    addProduct(product: IProductItem) {
        if (!(this.isInTheBasket(product.id))) {
            this.basketProducts.push(product);
            this.events.emit('product:select', {id: product.id});
        }
    }

    deleteProduct(id: string) {
        this.basketProducts = this.basketProducts.filter(product => product.id !== id);
        this.events.emit('product:select', {id: id});
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
            if (product && product.price) {
                tempSumm = tempSumm + product.price;
             } else {
                console.log('Объект не инициализирован или не содержит свойство price');
             }
        });
        return tempSumm;
    }

    deleteAllProducts() {
        this.basketProducts = [];
        this.events.emit('basket:isEmpty');
    }

    setBasketProducts(products: IProductItem[]) {
        this.basketProducts = products;
    }
    // добавила метод для подсчета количества товаров в корзине
    getCounter(): number {
        return this.basketProducts.length;
      }
}