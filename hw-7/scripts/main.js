`use strict`

// Логика(Функции, классы)

let lastId = 0;

// класс конструктор пользователя
class User {
	constructor(id, name, lastname, email, postadress) {
		this.id = id;
		this.name = name;
		this.lastname = lastname;
		this.email = email;
		this.postadress = postadress;
		this._basket = Array(); 
	}

	get fullName() {
		return `${this.name} ${this.lastname}`
	}

	get showUserBasket() {
		return this._basket
	}

	get showTotalBasket() {
		// Считаем общее колличество товара
		this.cnt_ = this._basket.reduce(function(x, y) {
				return (x + y.quantity);
		}, 0);
		// Считаем общую стоимость корзины
		this.totalBasket = this._basket.reduce(function(x, y) {
				return (x + y.finalPrice);
		}, 0);
		return this.cnt_ == false ? 'Товаров нет' : `${this.cnt_} товаров.
		Итого: ${this.totalBasket} руб.`;
	}
}


// ксласс конструктор товара
class Product {
	constructor(category, name, price, discount, img) {
		this.id = lastId++;
		this.category = category;
		this.name = name;
		this.price = discount !=0 ? Math.ceil(price - price * discount / 100) : price;
		this.discount = discount;
		this.img = img;
		this.finalPrice = this.price;
		this.quantity = 1;
	}
}


// Сохраняем данные о пользовательской корзине в локальное хранилище
function saveUser(user) {
  window.localStorage.setItem('user', JSON.stringify(user));
}


// Забирает данные о пользователе и корзине из локального хранилища
function loadUser() {
  const save_ = JSON.parse(window.localStorage.getItem('user'));
  console.log(save_);
  if(save_) {
  	let loadUser_ = new User(save_.id, save_.name, save_.lastname, save_.email, save_.postadress);
  	loadUser_._basket = save_._basket;
  	return loadUser_;
  } else { return save_; }
}


// рандомное число в заданном диапозоне
function randomInt(min_, max_) {
	max_ = Math.floor(max_);
	min_ = Math.ceil(min_);
	return Math.floor(Math.random() * ((max_ + 1) - min_) + min_);
}


//Генерация рандомного товара(Для тестов)
function genProduct() {
	const imgPaths = ['vidioCard', 'proc', 'mouse'];
	const categories = ['Видиокарты', 'Процессоры', 'Компъютерные мыши'];
	const randNames = ['rtm12', 'A2', 'YouH5', 'int7', 'someName 1', 'name5', 'Y17 G157'];
	const randImg = randomInt(1, 3);

	const category = categories[randomInt(0, categories.length - 1)];
	const imgPath = imgPaths[categories.indexOf(category)];
	const name = randNames[randomInt(0, randNames.length - 1)];
	const price = randomInt(100, 100000);
	const discount = randomInt(0, 40);
	const img = [
		`img/${imgPath}/${randImg}.jpg`, 
		`img/${imgPath}/${randImg}.jpg`, 
		`img/${imgPath}/${randImg}.jpg`
		];

	return new Product(category, name, price, discount, img);
}


// Генерация каталога js(Для теста)
function genCatalog(catalog) {
	for(let i = 0; i < 10; i++) {
		catalog.push(genProduct());
	}
}


// Добавление товара в корзину
function addToBasket(user, prod) {
	const existProduct = user._basket.find(function (product) { return product.id == prod.id});
	console.log(existProduct);
  	if(existProduct) {
    	existProduct.quantity++;
    	existProduct.finalPrice = existProduct.price * existProduct.quantity;
    	saveUser(user);
    	return;
    }

    const prodCopy = Object.assign(Object(), prod);

	user._basket.push(prodCopy);
	saveUser(user);
}


// Удаление товара из корзины
function removeToBasket(user, prodId) {
	const indexBasket = user._basket.findIndex(function (product) { return product.id == prodId});
	if(prodId.quantity > 1) {
    	prodId.quantity--;
    	prodId.finalPrice = prodId.price * prodId.quantity;
    	saveUser(user);
    } else {
    	user._basket.splice(indexBasket, 1);
    	saveUser(user);
    }
}


// ---------------------------------------------------------------------------------------------->

// Отрисовка страницы каталога


// Генерация каталога на сайте
function drowCatalog(data, inCatalog) {
	
	inCatalog.map( item => {
		const prodCard = `
		<div id="item-${item.id}" class="prod_item">
        <div class="item">
            <div class="image">
            	<img src="${item.img[0]}" width=240 height=180>
            	<div class="image-small">
            	<img src="${item.img[1]}" width=60 height=60>
            	<img src="${item.img[2]}" width=60 height=60>
            	</div>
            </div>
            <div class="description"><h4>${item.category}</h4>${item.name}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <button data-id="${item.id}" class="prod-button">В корзину</button>
        </div>
    </div>`;
		data.insertAdjacentHTML('beforeEnd', prodCard);

	});
}


// Генерация поля корзины на странице каталога
function drowBasket(divBasket) {
	divBasket.insertAdjacentHTML('beforeend', 
        `<div class="total">
        	<a href="user-basket.html">Корзина:</a>
            <p id="pbasket"></p>
        </div>`);
}


// ---------------------------------------------------------------------------------------------->

// Отрисовка страницы корзины пользователя


// Отрисовка страницы корзины
function drowBasketPage(data) {
	const basketPage = `
	<details id="basket-menu" open>
		<div id="totalBasket"></div>
		<summary>Товары в корзине</summary>
		<div id="basket-catalog">
			<button data-next="next" class="prod-button">Далее</button>
		</div>
		</details>
	<details id="post-menu">
		<summary>Адрес доставки</summary>
		<div class = "post-adress">
			<button data-continue="continue" class="prod-button">Далее</button>
		</div>
		</details>
	<details id="comment-menu">
		<summary>Комментарий</summary>
		<div class = "comment">
			<button data-finish="finish" class="prod-button">Оформить заказ</button>
		</div>
		</details>
	<div id="popup"></div> `

	data.insertAdjacentHTML('afterBegin', basketPage);
}


// Отрисовка вкладки корзина
function drowUserBasket(data, inCatalog) {
	inCatalog.map( item => {
		const userBasket = `
		<div id="item-${item.id}" class="prod_item">
        <div class="item">
            <div class="image">
            	<img src="${item.img[0]}" width=240 height=180>
            	<div class="image-small">
            	<img src="${item.img[1]}" width=60 height=60>
            	<img src="${item.img[2]}" width=60 height=60>
            	</div>
            </div>
            <div class="description"><h4>${item.category}</h4>${item.name}
                <div class="price">Цена: 
                    <span>${item.price}</span> руб.
                    <span>Колл-во: ${item.quantity}</span> шт.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <button data-delete="${item.id}" class="prod-button">Удалить</button>
            <button data-id="${item.id}" class="prod-button">Оплатить</button>
        </div>
    </div>`;
		data.insertAdjacentHTML('afterBegin', userBasket);

	});
}


// Отрисовка вкладку Адрес доставки
function drowPostAdress(data) {
	const postadress = `
	<form action="http://localhost:3000/user-basket.html" method="post">
		<p>Ф.И.О:
			<input type="text" name="useraddres"/>
		</p>

		<p>Город:
			<input type="text" name="useraddres"/>
		</p>

		<p>Область:
			<input type="text" name="useraddres"/>
		</p>

		<p>Улица:
			<input type="text" name="useraddres"/>
		</p>
		<p>Индекс:
			<input type="text" name="useraddres"/>
		</p>
		<p>Способ доставки;
			<br />
			<input type="checkbox" name="standart" value="post" checked="checked"/>Почта
			<input type="checkbox" name="standart" value="express"/>Экспресс
		</p>
		<input type="submit" name="nextonpost" value="Сохранить"/>
	</form>  `;
	data.insertAdjacentHTML('afterBegin', postadress);
}


// Отрисовываем вкладку коммнтарий
function drowComment(data) {
	const comment = `
	<form action="http://localhost:3000/user-basket.html" method="post">
	<p>Комментарий к доставке</p>
	<textarea name="comments" cols="120" rows="15">Комментарий</textarea>
	<div class="submit">
		<input type="submit" name="postcomm" value="Оставить комментарий"/>
	</div>
	</form> `;
	data.insertAdjacentHTML('afterBegin', comment);
}

// создаем модальное окно для подверждения заказа
function drowConfirmWindow(data, adress) {
    let orderDiv = document.createElement('div');
    let date = new Date().toLocaleDateString();
    let content = `
    <h2>Ваш заказ от ${date}<br> ${user1.showTotalBasket}. передан в обработку.</h2>
    <h4>Адрес доставки: ${adress}</h4>
    <button id="close" class="prod-button">Закрыть</button>`;

    console.log(adress);

    orderDiv.className = 'order-div';
    orderDiv.insertAdjacentHTML('beforeend', content);
    wrapper.append(orderDiv);
}
