// Т.к. карточка открывается и нам приходится работать с таким темплейтом:
/* 
    <template id="card-preview">
		<div class="card card_full">
			<img class="card__image" src="<%=require('../images/Subtract.svg')%>" alt="" />
			<div class="card__column">
				<span class="card__category card__category_other">другое</span>
				<h2 class="card__title">Бэкенд-антистресс</h2>
				<p class="card__text">Если планируете решать задачи в тренажёре, берите два.</p>
				<div class="card__row">
					<button class="button card__button">В корзину</button>
					<span class="card__price">1000 синапсов</span>
				</div>
			</div>
		</div>
	</template>,
*/
// есть необходимость расширить класс

/*import { EventEmitter } from "../base/events";
import { Card } from "./Card";

export interface ICardPreview {
    description: HTMLElement;
    button: HTMLButtonElement;
}

export class CardPreview extends Card implements ICardPreview {
    protected cardDescription: HTMLElement;
    protected cardButton: HTMLButtonElement;
    

    constructor(container: HTMLElement, protected events: EventEmitter) {
        super(container);
        this.cardDescription = this.container.querySelector('.card__text');
        this.cardButton = this.container.querySelector('.card__button"');
        this.cardButton.addEventListener('click', () => this.events.emit('product:intoTheBasket'));
    }

    set description(value: string) {
        this.setText(this.cardDescription, value);
    }

    set button(data: HTMLButtonElement) {
        // ...
    }
}*/