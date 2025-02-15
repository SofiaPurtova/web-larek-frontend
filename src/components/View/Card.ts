import { IProductItem } from "../../types";
import { ensureElement } from "../../utils/utils";
import { Component } from "../base/Component";
import { EventEmitter, IEvents } from "../base/events";


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
}

export class Card extends Component<IProductItem> {
    // Это все интерактивные элементы, т.е. для каждой карточки свои значения,
    // поэтому нужны сеттеры
    protected button: HTMLButtonElement;
    protected cardCategory: HTMLElement;
    protected cardTitle: HTMLElement;
    protected cardImage: HTMLImageElement;
    protected cardPrice: HTMLElement;
    protected id: string;

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.button = container.querySelector('.gallery__item');
        this.cardCategory = this.button.querySelector('.card__category');
        this.cardTitle = this.button.querySelector('.card__title');
        this.cardImage = this.button.querySelector('.card__image');
        this.cardPrice = this.button.querySelector('.card__price');
        
        this.button.addEventListener('click', () => this.events.emit('product:open', {id: this.id}));
    }

    set category(value: string) {
        this.setText(this.cardCategory, value);
    }

    set title(value: string) {
        this.setText(this.cardTitle, value);
    }
    
    set image(value: number) {}

    set price(value: string) {
        this.setText(this.cardPrice, `${value} синапсов`);
    }
}