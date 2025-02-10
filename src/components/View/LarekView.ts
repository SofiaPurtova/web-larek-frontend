import { IProductItem } from "../../types";
import { IEvents } from "../base/events";

export class BasketView {
    protected title: HTMLElement;
    protected basketList: HTMLElement;
    protected button: HTMLButtonElement;
    protected basketPrice: HTMLElement;
    protected closeButton: HTMLButtonElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    set items(items: HTMLElement[]) {}
    SumOfAllProducts(): number {}
    render(): HTMLElement {}
}

export class BasketItemView {
    protected index:HTMLElement;
	protected title: HTMLElement;
	protected price: HTMLElement;
    protected basketItemDelete: HTMLButtonElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    render(product: IProductItem, item: number): HTMLElement {};
}

export class CardCatalogView {
    protected _cardElement: HTMLElement;
    protected _cardCategory: HTMLElement;
    protected _cardTitle: HTMLElement;
    protected _cardImage: HTMLImageElement;
    protected _cardPrice: HTMLElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    setText(element: HTMLElement, value: string): string {}
    setPrice(value: number): string {}
    cardCategory(value: string) {}
    render(product: IProductItem): HTMLElement {}
    }

export class CardPreviewView extends CardCatalogView {
    protected image: HTMLElement;
    protected cardElement: HTMLElement;
    protected cardCategory: HTMLElement;
    protected cardTitle: HTMLElement;
    protected cardImage: HTMLImageElement;
    protected cardPrice: HTMLElement;
    protected button: HTMLButtonElement;
    
    constructor(template: HTMLTemplateElement, protected events: IEvents) {}

    render(product: IProductItem): HTMLElement {}
}

export class OrderViewFirtsStep {
    protected form: HTMLFormElement;
    protected closeButton: HTMLButtonElement;
    protected paymentButtons: HTMLButtonElement[];
    protected addressInput: HTMLInputElement;
    protected nextButton: HTMLButtonElement;
    protected errorMessage: HTMLElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}
    
    choosePaymentMethod(paymentMethod: string) {}
    enterAddress(value: string) {}
    toggleNextButton() {}
    render(): HTMLElement {}
}

export class OrderViewSecondStep {
    protected form: HTMLFormElement;
    protected closeButton: HTMLButtonElement;
    protected emailInput: HTMLInputElement;
    protected telephoneInput: HTMLInputElement;
    protected payButton: HTMLButtonElement;
    protected errorMessage: HTMLElement;

    constructor(templateId: string) {}

    enterEmail(value: string) {}
    enterPhoneNumber(value: string) {}
    togglePayButton() {}
    render(): HTMLElement {}
}

export class ModalView {
    protected modalContainer: HTMLElement;
    protected closeButton: HTMLButtonElement;

    constructor(modalContainer: HTMLElement, protected events: IEvents) {}

    openModla() {}
    closeModal() {}
    render(): HTMLElement {}
}

export class successOrder {
    protected modalContainer: HTMLElement;
    protected successTitle: HTMLElement;
    protected successDescription: HTMLElement;
    protected closeButton: HTMLButtonElement;
    protected button: HTMLButtonElement;

    constructor(template: HTMLTemplateElement, protected events: IEvents) {}
}