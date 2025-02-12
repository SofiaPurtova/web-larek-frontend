import { IProductItem } from "../../types";
import { IOrder, IOrderResult } from "../../types";
import { Api } from "../base/api";

// класс наследуется от Api для того, что можно было использовать родительские свойства и методы 
// Необходимо: 
// - отправлять запросы на на сервер чтобы получить карточки и оформить заказ 
export class LarekAPIModel extends Api {
    protected link: string;
    protected products: IProductItem[];

    constructor(link: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options); 
    }

    getProductItems(): Promise<IProductItem[]>;
    postOrderLot(order: IOrder): Promise<IOrderResult>;
}