`use strict`

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

	get showBasket() {
		return this._basket
	}

	get showTotalBasket() {
		this.cnt_ = this._basket.length;
		this.totalBasket = this._basket.reduce(function(x, y) {
				return (x + y.finalPrice);
		}, 0);
		return this.cnt_ = 0 ? 'корзина пуста' : `В корзине ${this.cnt_} товаров.
		Итого: ${this.totalBasket} руб.`;
	}

	productAddToBasket(product, cnt) {
		product.counts = cnt;
		product.price *= cnt;
		return this._basket.push(product);
	}

}


// ксласс конструктор товара
class Product {
	constructor(id, category, name, articleN, price, discount, img) {
		this.id = id;
		this.category = category;
		this.name = name;
		this.articleN = articleN;
		this.price = price;
		this.discount = discount;
		this.img = `img/${img}.jpg`
		this.finalPrice = (
			this.discount !=0) ? (
			this.price - this.price * this.discount / 100) : (this.price)
	}
}


// Генерация каталога
function genCatalog(data,inCatalog) {
	
	for(item of inCatalog) {
		const prodCard = `
		<div id="item-${item.id}" class="prod_item">
        <div class="item">
            <div class="image"><img src="${item.img}" width=240 height=180></div>
            <div class="description"><h4>${item.category}</h4>${item.name}
                <div class="price">Цена: 
                    <span>${item.finalPrice}</span> руб.
                </div>
            </div>
        </div>
        <div class="sale">
            <span class='offer ${item.discount > 0 ? 'show' : ''}'>Скидка: ${item.discount}%</span>
            <button id="${item.id}" class="button">В корзину</button>
        </div>
    </div>`
		data.insertAdjacentHTML('beforeEnd', prodCard);

	}
}


// Генерация поля корзины
function genBasket(divBasket) {
	basket.insertAdjacentHTML('beforeend', 
        `<div class="total">
            <p id="pbasket"></p>
            <a class="buy" href="#">Купить</a>
        </div>`);
}


// Создаем пользователя и каталог
const user1 = new User(1, 'Влад', 'Горякин', 'test1@post.com', 'postAddr');
const jsCatalog = Array();


// Наполняем каталог в js
jsCatalog.push(
	new Product(0, 'Видиокарты','Nvidia RTX 3070 TI', '178000565', 155000, 0, '3070ti'));
jsCatalog.push(
	new Product(1, 'Процессоры','AMD Ryzen 7', '178000965', 45000, 10, 'amd2'));

// Генерируем каталог на странице
const catalog = document.querySelector('#catalog');
genCatalog(catalog, jsCatalog);

// Генерируем корзину на странице
const divBasket = document.querySelector('#basket');
genBasket(divBasket);

// Устанавливаем отображение товаров к корзине
const pBasket = document.querySelector('#pbasket');
pBasket.textContent = user1.showTotalBasket;

// Настраиваем события на кнопке "в корзину"
const button = document.querySelectorAll('.button');
button.forEach((btn) => {
	btn.addEventListener(
	'click', () => {
		user1.productAddToBasket(jsCatalog[btn.id], 1);
	});
	btn.addEventListener('click', () => {
	pBasket.textContent = user1.showTotalBasket;
	});
});

// Настройка событий для просмотра изображения
const popup = document.querySelector('#popup');

popup.addEventListener('click', function(e) {
    popup.style.display = 'none';
});

catalog.addEventListener('click', function(e) {
    if( e.target.tagName === 'IMG' ) {
        popup.textContent = '';
        popup.style.display = 'flex';
        popup.insertAdjacentHTML('beforeend',
            `<img src="${e.target.getAttribute('src')}" class="scale">`);
    }
});








