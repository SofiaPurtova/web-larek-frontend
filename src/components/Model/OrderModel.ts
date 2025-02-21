import { FormErrors, IReadyOrder } from "../../types";
import { IEvents } from "../base/events";

export interface IOrderModel {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    setAddress(field: string, value: string): void;
    validateAddress(): boolean;

    setEmailAndTelephone(field: string, value: string): void;
    validateEmailAndTelephone(): boolean;

    getReadyOrder(): IReadyOrder;
  }

export class OrderModel implements IOrderModel {
    payment: string;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    formErrors: FormErrors = {};
    
    constructor(protected events: IEvents) {
      this.payment = '';
      this.email = '';
      this.phone = '';
      this.address = '';
      this.total = 0;
      this.items = [];
    }

    setAddress(field: string, value: string) {
      if (field === 'address') {
        this.address = value;
      }

      if (this.validateAddress()) {
        this.events.emit('order:valid', this.getReadyOrder());
      }
    }

    validateAddress(): boolean {
      const regexp = /^[а-яА-ЯёЁa-zA-Z0-9\s\/.,-]{7,}$/;
      const errors: typeof this.formErrors = {};

      if (!this.address) {
        errors.address = 'Необходимо указать адрес'
      } else if (!regexp.test(this.address)) {
        errors.address = 'Укажите настоящий адрес'
      } else if (!this.payment) {
        errors.payment = 'Выберите способ оплаты'
      }

      this.formErrors = errors;
      this.events.emit('formErrors:address', this.formErrors);
      return Object.keys(errors).length === 0;
  }

    setEmailAndTelephone(field: string, value: string) {
      if (field === 'email') {
        this.email = value;
      } else if (field === 'phone') {
        this.phone = value;
      }

      if (this.validateEmailAndTelephone()) {
        this.events.emit('order:valid', this.getReadyOrder());
      }
    }

    validateEmailAndTelephone(): boolean {
      const regexpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const regexpPhone = /^(\+7|8)?\s*\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
      const errors: typeof this.formErrors = {};

      if (!this.email) {
        errors.email = 'Необходимо указать email'
      } else if (!regexpEmail.test(this.email)) {
        errors.email = 'Некорректный адрес электронной почты'
      }

      if (this.phone.startsWith('8')) {
        this.phone = '+7' + this.phone.slice(1);
      }

      if (!this.phone) {
        errors.phone = 'Необходимо указать телефон'
      } else if (!regexpPhone.test(this.phone)) {
        errors.phone = 'Некорректный формат номера телефона'
      }

      this.formErrors = errors;
      this.events.emit('formErrors:emailAndTelephone', this.formErrors);
      return Object.keys(errors).length === 0;
  }

    getReadyOrder(): IReadyOrder {
      return {
        payment: this.payment,
        email: this.email,
        phone: this.phone,
        address: this.address,
        total: this.total,
        items: this.items,
      }
    }

    /*reset() {
      this.payment = '';
      this.email = '';
      this.phone = '';
      this.address = '';
      this.total = 0;
      this.items = [];
      this.formErrors = {};
      this.events.emit('formErrors:address', this.formErrors);
      this.events.emit('formErrors:emailAndTelephone', this.formErrors);
  }*/
  
}