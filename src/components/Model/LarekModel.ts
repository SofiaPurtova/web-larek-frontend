import { Api } from "../base/api";
import { IProductItem, IBasket, IOrderModel, IOrder } from "../../types";

// Модель главной страницы ларька. Необходимо:
// - ввыводить карточки
// - открывать модальное окно карточки
// - открывать модальное окно корзины
export class LarekModel {
    protected _products: IProductItem[];

    constructor() {
        this._products = [];
    }

    getProducts(): IProductItem[] {}

    openModal(id: string): IProductItem {}

    openBasket(): IBasket {}
}


// Модель корзины. Необходимо: 
// - удалять/добавлять товар 
// - получать итоговую сумму заказа
export class BasketModel implements IBasket {
    protected _basketProducts: IProductItem[];
    
    constructor() {
        this._basketProducts = [];
    }

    set BasketProducts(products: IProductItem[]) {}
    get asketProducts() {}
    
    addProduct(product: IProductItem) {}
    deleteProduct(product: IProductItem) {}
    getFinalSumm(): number {}
}

// Модель заказа. Необходимо: 
// - выбирать способ оплаты
// - вводить адрес и поверять его на правильность
// - вводить контактные данные и проверять их
// -получать оформленный заказ
export class OrderModel implements IOrderModel {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    
    setWayOfPayment() {}

    setAddress(field: string, value: string) {}
    validateAddress(): boolean {}

    setEmailAndTelephone(field: string, value: string) {}
    validateEmailAndTelephone(): boolean {}

    getReadyOrder(): IOrder {}
}

// класс наследуется от Api для того, что можно было использовать родительские свойства и методы 
// Необходимо: 
// - отправлять запросы на на сервер чтобы получить карточки и оформить заказ 
export class ILarekAPIModel extends Api {
    protected link: string;
    protected products: IProductItem[];

    constructor(link: string, baseUrl: string, options?: RequestInit) {
        super(baseUrl, options); 
    }

    getProductItems(): Promise<IProductItem[]>;
    postOrderLot(order: IOrder): Promise<IOrderResult>;
}