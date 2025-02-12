import { IEvents } from "../base/events";
import { IProductItem } from "../../types";

/*Данный класс необходим для работы сос ледующим темплейтом:
    <template id="card-catalog">
		<button class="gallery__item card">
			<span class="card__category card__category_soft">софт-скил</span>
			<h2 class="card__title">+1 час в сутках</h2>
			<img class="card__image" src="<%=require('../images/Subtract.svg')%>" alt="" />
			<span class="card__price">750 синапсов</span>
		</button>
	</template>
Нам надо устанавливать категорию товара, описание и цену    
*/

export interface ICardCatalogView {
    setText(element: HTMLElement, value: string): string;
    setPrice(value: number): string;
    setCategory(value: string): HTMLElement; 
    render(product: IProductItem): HTMLElement;
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
    setCategory(value: string): HTMLElement {} 
    render(product: IProductItem): HTMLElement {}
}