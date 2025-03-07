import { IProductItem } from "../../types";
import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { IEvents } from "../base/events";


/* 
этот класс для работы с этим темплейтом:
    <template id="card-catalog">
		<button class="gallery__item card">
			<span class="card__category card__category_soft">софт-скил</span>
			<h2 class="card__title">+1 час в сутках</h2>
			<img class="card__image" src="<%=require('../images/Subtract.svg')%>" alt="" />
			<span class="card__price">750 синапсов</span>
		</button>
	</template>
*/

export interface ICard {
    category: HTMLElement;
    title: HTMLElement;
    image: HTMLElement;
    price: HTMLElement;
    render(data: Partial<IProductItem>): HTMLElement;
    id: string;
}

export class Card extends Component<IProductItem> {
    // Это все интерактивные элементы, т.е. для каждой карточки свои значения,
    // поэтому нужны сеттеры
    //protected button: HTMLButtonElement;
    protected cardCategory: HTMLElement;
    protected cardTitle: HTMLElement;
    protected cardImage: HTMLImageElement;
    protected cardPrice: HTMLElement;
    protected cardId: string;
    protected categoryColor = <Record<string, string>>{
        "кнопка": "button",
        "другое": "other",
        "хард-скил": "hard",
        "дополнительное": "additional"        
    } 

    constructor(container: HTMLElement, protected events: IEvents) {
        super(container);
        //this.button = ensureElement('.card', this.container) as HTMLButtonElement;
        this.cardCategory = ensureElement('.card__category', this.container) as HTMLElement;
        this.cardTitle = ensureElement('.card__title', this.container) as HTMLElement;
        this.cardImage = ensureElement('.card__image', this.container) as HTMLImageElement;
        this.cardPrice = ensureElement('.card__price', this.container) as HTMLElement;
        
        this.container.addEventListener('click', () => { this.events.emit('product:select', /*this.container*/{id: this.cardId}) });
    }

    set category(value: string) {
        this.setText(this.cardCategory, value);
        this.cardCategory.classList.add(`card__category_${this.categoryColor[value]}`);
    }

    set title(value: string) {
        this.setText(this.cardTitle, value);
    }
    
    set image(value: string) {
        this.cardImage.src = value;
        this.cardImage.alt = this.title;
    }

    set price(value: number | null) {
        if (value === null) {
            this.setText(this.cardPrice, 'Бесценно');
        } else {
            this.setText(this.cardPrice, `${value} синапсов`);
        }
    }

    
    set id(value: string) {
        this.cardId = value;
    }
}