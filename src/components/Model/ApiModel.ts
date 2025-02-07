import { ApiListResponse, Api } from '../base/api'
import { IOrderLot, IOrderResult, IProductItem } from '../../types';

export interface IApiModel {
    cdn: string;
    items: IProductItem[];
    getListProductCard: () => Promise<IProductItem[]>; // возвращает массив карточек, получая данные с сервера по адресу /product
    postOrderLot: (order: IOrderLot) => Promise<IOrderResult>; // отправляет заказ на сервер
}

export class ApiModel extends Api {
    // ...
  }