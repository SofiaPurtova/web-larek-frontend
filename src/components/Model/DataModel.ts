import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

export interface IDataModel {
  productCards: IProductItem[]; // массив карточек
  selectedСard: IProductItem;  // выбранный товар
  setPreview(item: IProductItem): void; //  метод для установки предварительного просмотра товара
}

export class DataModel implements IDataModel {
  protected _productCards: IProductItem[];
  selectedСard: IProductItem;

  constructor(protected events: IEvents) {
    this._productCards = []
  }

  //  сеттер для productCards
  set productCards(data: IProductItem[]) {
    this._productCards = data;
    this.events.emit('productCards:receive'); // вызываем метод emit у объекта events, чтобы сигнализировать о том, что массив товаров был обновлён
  }

  //  геттер для productCards
  get productCards() {
    return this._productCards;
  }

  setPreview(item: IProductItem) {
    this.selectedСard = item;
    this.events.emit('modalCard:open', item) // вызываем метод emit у объекта events, чтобы сообщить о необходимости открытия карточки товара
  }
}