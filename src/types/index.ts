// интерфейс карточки товара
export interface IProductItem {
  id: string;
  description?: string; // т.к. описание доступно только при нажатии на товар
  image?: string; // т.к. картинка доступна только на главной странице и в модальном окне карточки товара, в корзине нет изображения
  title: string;
  category?: string; // т.к. категория доступна только на главной странице и в модальном окне карточки товара, в корзине нет категории
  price: number | null;
}

// интерфейс корзины
export interface IBasket {
  basketProducts: IProductItem[];
  addProduct(product: IProductItem): void;
  deleteProduct(product: IProductItem): void;
  getFinalSumm(): number;
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
  items: string[]
}

export interface IOrderResult {
  id: string;
  total: number;
}
  
// тип ошибки формы (взято из ono-tebe-nado-oop)
export type FormErrors = Partial<Record<keyof IOrder, string>>;

