# Проектная работа "Веб-ларек"  
  
Web-ларёк — это интернет-магазин с товарами для веб-разработчиков. В нём можно посмотреть каталог товаров, добавить товары в корзину и сделать заказ.   
  
# Описание  

Архитектура приложения разрабатывается с использованием паттерна MVP, в котором основными слоями являются:
- View - классы, отвечающие за отображение данных на экране.    
- Model - классы, отвечающие за работу с данными.  
- Presenter - код презентера не будет выделен в отдельный класс, а будет содержаться в основном скрипте приложения (src/index.ts).  
   
    
## Список обытий:  
- ### Событие на изменение данных:  
- измененние списка продуктов (в корзине, например): product:change.  
- изменение данных пользователя (при оформлении заказа) form:change.   
- ### Событие на действия пользователя 
- выбор товара: product:open. 
- нажатие кнопки оформления заказа: order:futher.  
- изменение поллей ввода при оформлении заказа: contacts:change.  
- добавление элемента в корзину: product:intoTheBasket.  
- удаление элемента из корзины: product:delete.  
- выбор метода оплаты: choose:payment.   
- открытие корзины: basket:open.  
- нажатие на кнопку: button:submit.  
- открытие окна успешной покупки: success:close.  
- закрытие окна успешной покупки: success:close.  

  
# Используемый стек  
  
Стек: HTML, SCSS, TS, Webpack  
  
Структура проекта:  
- src/ — исходные файлы проекта  
- src/components/ — папка с JS компонентами  
- src/components/base/ — папка с базовым кодом  
  
Важные файлы:  
- src/pages/index.html — HTML-файл главной страницы  
- src/types/index.ts — файл с типами  
- src/index.ts — точка входа приложения  
- src/scss/styles.scss — корневой файл стилей  
- src/utils/constants.ts — файл с константами  
- src/utils/utils.ts — файл с утилитами  
  
## Установка и запуск  
Для установки и запуска проекта необходимо выполнить команды  
  
```  
npm install  
npm run start  
```  
  
или  
  
```  
yarn  
yarn start  
```  
## Сборка  
  
```  
npm run build  
```  
  
или  
  
```  
yarn build  
```  
# Описание базовых классов, их предназначение и функции    

### Класс Api имеет следующие свойства и методы.  
  
Методы:  
  
- handleResponse(response: Response): Promise<object> - обработчик ответа сервера.  
- get(uri: string) - принимает изменяющеюся часть url-адреса, возвращает ответ от сервера.  
- post(uri: string, data: object, method: ApiPostMethods = 'POST') - принимает изменяющеюся часть url-адреса, принимает данные в виде объекта для отправки на сервер, type ApiPostMethods = 'POST' | 'PUT' | 'DELETE'.  
    
    
### Класс EventEmitter - брокер событий, implements от IEvents и имеет следующие методы
  
Класс EventEmitter реализует паттерн «Observer/Наблюдатель» и обеспечивает работу событий, его методы позволяют устанавливать и снимать слушатели событий, вызвать слушатели при возникновении события.  
  
Методы:  
  
- on - для подписки на событие.  
- off - для отписки от события.  
- emit - уведомления подписчиков о наступлении события соответственно.  
- onAll - для подписки на все события.  
- offAll - сброса всех подписчиков.  
- trigger - генерирует заданное событие с заданными аргументами. Это позволяет передавать его в качестве обработчика события в другие классы. Эти классы будут генерировать события, не будучи при этом напрямую зависимыми от класса EventEmitter. 
  
### Класс Component служит базовым классом для создания компонентов пользовательского интерфейса.  

Методы:  
- toggleClass - переключает указанный CSS-класс у элемента. Можно указать принудительное состояние класса.   
- setText - устанавливает текстовое содержимое элемента. Приватный метод.  
- setDisabled - устанавливает или удаляет атрибут disabled у элемента.    
- setHidden - скрывает элемент путем установки стиля display в none. Приватный метод.   
- setVisible - показывает скрытый элемент путем удаления свойства стиля display. Приватный метод.  
- setImage - устанавливает источник изображения и альтернативный текст для элемента <img>.  
- render - возвращает корневой DOM-элемент компонента и может обновлять его свойства на основе переданных данных.  

  
## Модели данных.   
  
### Класс LarekModel предназначен для работы с данными продуктов, полученными с сервера. Он реализует интерфейс ILarekModel и предоставляет методы для управления продуктами.  
  
Методы:  
   
- setProducts - принимает массив продуктов и сохраняет его в productCards. Возвращает массив продуктов.  
- getProducts - возвращает текущий массив продуктов, хранящийся в productCards.  
-  getProduct - принимает идентификатор продукта и возвращает карточку продукта с указанным ID, если она существует.  
   
### Класс BasketModel предназначен для управления корзиной товаров. Он реализует интерфейс IBasketModel и предоставляет различные методы для работы с продуктами в корзине.    
  
Методы:
  
- addProduct - добавляет продукт в корзину и вызывает событие products:changed.
- deleteProduct - удаляет продукт из корзины по его идентификатору и вызывает событие products:changed.  
- getBasketProducts - возвращает текущий массив продуктов, находящихся в корзине.  
- getBasketProduct - возвращает продукт из корзины по указанному ID, если он существует.   
- getFinalSumm - считает сумму всех товаров в корзине.  
- deleteAllProducts - очищает корзину от всех продуктов и вызывает событие products:changed.  
- setBasketProducts - устанавливает массив продуктов в корзину.  
   
### Класс OrderModel управляет формой заказа.  
  
Методы:  
  
- setAddress - принимает/сохраняет адрес пользователя.  
- validateAddress - проверяет адрес пользователя.  
- setEmailAndTelephone - принимает/сохраняет номер телефона и почту пользователя.  
- validateEmailAndTelephone - проверяет номер телефона и почту пользователя.  
- getReadyOrder - возвращает данные пользователя необходимы для оформления заказа.  
  
### Класс ILarekAPIModel наследуется от класса Api, передаёт и получает данные от сервера.  
  
Методы:  
  
- getProductItems - получаем массив карточек с сервера.  
- postOrderLot - отправляем запрос на сервер для формирования заказа.  
  
  
## Компоненты представления.  

### Класс Basket управляет корзиной покупок пользователя. Он наследует от компонента Component, и использует события для взаимодействия с другими частями приложения.  
  
Методы и сеттеры:  
- set productCards - задает карточки товаров в корзине, заменяя содержимое basketList.  

- set button - сеттер для установки кнопки.    

- set summ - устанавливает текст для элемента basketSumm, отображая сумму в синапсах.  
    
### Класс BasketCard представляет собой элемент карточки товара в корзине. Он наследует от компонента Component и использует события для взаимодействия с другими частями приложения, например, для удаления товара из корзины.  
  
Методы и сеттеры:  
- set index - задает индекс товара, обновляя соответствующий элемент.  
- set title - задает название товара, обновляя соответствующий элемент.  
- set price - задает цену товара, обновляя соответствующий элемент и добавляя текст "синапсов".  
- set button - сеттер для установки кнопки.   
  
### Класс Card управляет отображением карточки товара на веб страницею Этот класс наследуется от Component.  
 
Методы и сеттеры:  
  
еттеры:
- set category - устанавливает текст категории товара.  
- set title - устанавливает текст названия товара.  
- set image - устанавливает изображение товара.  
- set price - устанавливает текст цены товара, добавляя "синапсов".   
    
### Класс CardPreview расширяет функциональность класса Card и управляет отображением подробного описания карточки товара в превью, позволяет добавить карточку в корзину.  
  
Методы и сеттеры:  
  
- set description - устанавливает текст описания товара.  
- set button - устанавливает кнопку.     
  
### Класс Класс Order представляет собой компонент формы заказа, который управляет вводом данных пользователя и обработкой событий, связанных с заказом. Этот класс наследуется от Component.    
  
Методы и сеттеры:  
  
- set inputFields - устанавливает поля ввода (реализация не указана).  
- set validation - включает или отключает кнопку отправки заказа в зависимости от состояния валидации.    
   
### Класс Order представляет собой компонент формы заказа, который управляет выбором метода оплаты и отображением адреса доставки. Этот класс наследуется от Component.  
  
Методы и сеттеры:  
    
- set paymentMethod - устанавливает способ оплаты.  
- set address - устанавливает текст адреса доставки.  
- set validation - включает или отключает кнопку отправки заказа в зависимости от состояния валидации.    
   
### Класс Modal управляет отображением модальных окон и наследуется от класса Component.  
  
Методы:  
  
- open - отображает модальное окон.  
- close - закрывает модальное окно. 
- render - отображает модальное окно.   
  
### Класс Success управляет отображением успешного заказа в модальном окне.  
  
Методы:  
  
- set description - устанавливает текстовое описание успешного завершения заказа, отображая количество списанных синапсов.  
- set button - устанавливает данные для кнопки.   
  