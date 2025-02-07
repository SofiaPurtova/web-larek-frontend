import { ApiListResponse, Api } from '../base/api'
import { IOrderLot, IOrderResult, IProductItem } from '../../types';

export interface IApiModel {
    cdn: string;
    items: IProductItem[];
    getListProductCard: () => Promise<IProductItem[]>;
    postOrderLot: (order: IOrderLot) => Promise<IOrderResult>;
}

export class ApiModel extends Api {
    cdn: string;
    items: IProductItem[];

    // вызывает конструкцию родительского класса Api
    constructor(cdn: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options);
        this.cdn = cdn;
    }

    // возвращает массив карточек, получая данные с сервера по адресу /product
    getListProductCard(): Promise<IProductItem[]> {
        return this.get('/product').then((data: ApiListResponse<IProductItem>) =>
          data.items.map((item) => ({
            ...item,
            image: this.cdn + item.image,
          }))
        );
    }

    // отправляет заказ на сервер
    postOrderLot(order: IOrderLot): Promise<IOrderResult> {
    return this.post(`/order`, order).then((data: IOrderResult) => data);
  }
  }