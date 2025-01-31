export interface IProductItem {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
}

export interface IActions {
    onClick: (event: MouseEvent) => void;
}

  // интерфейс формы заказа
export interface IOrderForm {
    payment?: string;
    email?: string;
    phone?: string;
    address?: string;
    total?: string | number;
}

export interface IOrder extends IOrderForm {
    items: string[];  // почему не массив какой-нибудь
}


export interface IOrderResult {
    id: string;
    total: number;
  }
  
  // тип ошибки формы
export type FormErrors = Partial<Record<keyof IOrder, string>>;

export interface IBasketModel {
    items: Map<string, number>;
    add(id: string): void;
    remove(id: string): void;
}