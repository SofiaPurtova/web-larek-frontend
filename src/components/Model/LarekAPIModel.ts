import { IProductItem, IReadyOrder } from "../../types";
import { IOrder, IOrderResult } from "../../types";
import { Api, ApiListResponse } from "../base/api";

export interface IAPIModel {
    cdn: string;
    items: IProductItem[];
    getProductCards(): Promise<IProductItem[]>;
    postOrder(order: IOrder): Promise<IOrderResult>;
}

export class LarekAPIModel extends Api {
    cdn: string;
    items: IProductItem[];

    constructor(cdn: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options);
        this.cdn = cdn;
    }

    // получаем массив объектов(карточек) с сервера
  getProductCards(): Promise<IProductItem[]> {
    return this.get('/product').then((data: ApiListResponse<IProductItem>) =>
      data.items.map((item) => ({
        ...item,
        image: this.cdn + item.image,
      }))
    );
  }

  // получаем ответ от сервера по сделанному заказу
  postOrder(order: IReadyOrder): Promise<IOrderResult> {
    return this.post(`/order`, order).then((data: IOrderResult) => data);
  }
}