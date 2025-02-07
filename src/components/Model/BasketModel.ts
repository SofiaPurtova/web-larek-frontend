import { IProductItem } from "../../types";

export interface IBasketModel {
  basketProducts: IProductItem[];
  getCounter: () => number;
  getSumAllProducts: () => number;
  setSelectedСard(data: IProductItem): void;
  deleteCardToBasket(item: IProductItem): void;
  clearBasketProducts(): void
}

export class BasketModel implements IBasketModel {
  // защищённый массив, хранит список товаров в корзине. 
  // инициализируется пустым массивом в конструкторе класса.
  protected _basketProducts: IProductItem[];

  constructor() {
    this._basketProducts = [];
  }

  // сеттер, позволяет устанавливать новый массив товаров в корзину
  set basketProducts(data: IProductItem[]) {
    this._basketProducts = data;
  }

  // геттер, возвращает текущий массив товаров в корзине
  get basketProducts() {
    return this._basketProducts;
  }

  // количество позиций в корзине
  getCounter() {
    return this.basketProducts.length;
  }

  // сумма всей корзины
  getSumAllProducts() {
    let sumAll = 0;
    this.basketProducts.forEach(item => {
      sumAll = sumAll + item.price;
    });
    return sumAll;
  }

  // добавляет товар в корзину
  setSelectedСard(data: IProductItem) {
    this._basketProducts.push(data);
  }

  // удаляет указанный товар из корзины
  deleteCardToBasket(item: IProductItem) {
    const index = this._basketProducts.indexOf(item);
    if (index >= 0) {
      this._basketProducts.splice(index, 1);
    }
  }

  // очищает корзину
  clearBasketProducts() {
    this.basketProducts = []
  }
}