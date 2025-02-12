import { IOrder } from "../../types";

// Модель заказа. Необходимо: 
// - выбирать способ оплаты
// - вводить адрес и поверять его на правильность
// - вводить контактные данные и проверять их
// -получать оформленный заказ
export interface IOrderModel {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    setWayOfPayment(): void;
    validateWayOfPayment(): boolean;
    setAddress(field: string, value: string): void;
    validateAddress(): boolean;
    setEmailAndTelephone(field: string, value: string): void;
    validateEmailAndTelephone(): boolean;
    getReadyOrder(): IOrder;
  }

export class OrderModel implements IOrderModel {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    
    constructor() {}

    setWayOfPayment(): void {}
    validateWayOfPayment(): boolean {}

    setAddress(field: string, value: string): void {}
    validateAddress(): boolean {}

    setEmailAndTelephone(field: string, value: string): void {}
    validateEmailAndTelephone(): boolean {}

    getReadyOrder(): IOrder {}
}