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
        super(baseUrl, options); // вызываем конструктор класса Api
        this.cdn = cdn; // присваиваем значение cdn свойству cdn текущего экземпляра класса ApiModel
    }

    
    // возвращает массив карточек, получая данные с сервера по адресу /product
    getListProductCard(): Promise<IProductItem[]> {
        return this.get('/product').then((data: ApiListResponse<IProductItem>) => // выполняем GET запрос
          data.items.map((item) => ({ // проходимся по всем карточкам
            ...item, // используем spread-оператор, чтобы взять все свойста карточки
            image: this.cdn + item.image, // обновляем свойство image
          }))
        );
    }

    // Метод выполняет POST запрос
    // отправляет заказ на сервер
    postOrderLot(order: IOrderLot): Promise<IOrderResult> {
    return this.post(`/order`, order).then((data: IOrderResult) => data);
  }
  }