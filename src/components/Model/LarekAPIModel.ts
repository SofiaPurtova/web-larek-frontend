import { IProductItem } from "../../types";
import { IOrder, IOrderResult } from "../../types";
import { Api, ApiListResponse } from "../base/api";

export interface IAPIModel {
    link: string;
    items: IProductItem[];
    getProductCards(): Promise<IProductItem[]>;
    postOrder(order: IOrder): Promise<IOrderResult>;
}

// класс наследуется от Api для того, что можно было использовать родительские свойства и методы 
// Необходимо: 
// - отправлять запросы на на сервер чтобы получить карточки и оформить заказ 
export class LarekAPIModel extends Api {
    link: string;
    items: IProductItem[];

    constructor(link: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options); 
    }

    // получаем массив объектов(карточек) с сервера
  getProductCards(): Promise<IProductItem[]> {}

  // получаем ответ от сервера по сделанному заказу
  postOrder(order: IOrder): Promise<IOrderResult> {}
}