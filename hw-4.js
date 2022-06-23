'use strict'

/* 1. Написать функцию, преобразующую число в объект. Передавая на вход число 
от 0 до 999,надо получить на выходе объект, в котором в соответствующих свойствах
описаны единицы,десятки и сотни. 
Например, для числа 245 надо получить следующий объект: 
{‘единицы’: 5,‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующеесообщение с помощью 
console.log и вернуть пустой объект.*/


// Превращает полученное число в обьект, но не выше 999.
function numberToObject(numb) {
	let result = Object();
	let prot_ = numb < 999 ? Array.from(String(numb), Number) : 'Число > 999';
	if(Array.isArray(prot_)) {
		result = {
			units: prot_.pop(),
			decades: prot_.pop(),
			hundreds: prot_.pop(),
		};
	} else {
		console.error(prot_);
	}
	return result;
}


// Тесты
console.group('Задание 1. Тесты');
	console.table(numberToObject(852));
	console.table(numberToObject(1100));
console.groupEnd();

console.warn('===============================================================>');


/* 2. Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 
3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в
интернет-магазине актуальна не только для корзины, но и для каталога. 
Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для 
различных модулей сайта, но в разных местах давал возможность вызывать разные 
методы.*/


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
		this.totalBasket = this._basket.reduce((x, y) => {
				return x + y.price;
		}, 0);
		return this.totalBasket;
	}
	
	productAddToBasket(product, cnt) {
		product.counts = cnt;
		return this._basket.push(product);
	}

}


// ксласс конструктор товара
class Product {
	constructor(category, name, articleN, price) {
		this.category = category;
		this.name = name;
		this.articleN = articleN;
		this.price = price;
	}
}


// тесты
console.group('Задание 2 и 3. Тесты');
	const user1 = new User(1, 'Влад', 'Горякин', 'test1@post.com', 'postAddr');
	const catalog = Array();
	
	catalog.push(
		new Product('Видиокарты','Nvidia RTX 370 TI', '178000565', 155000));
	catalog.push(
		new Product('Процессоры','AMD Ryzen 7', '178000965', 45000));

	console.log('Пользователь:');
	console.table(user1);
	console.log('Каталог:')
	console.table(catalog);

	user1.productAddToBasket(catalog[0], 1);
	user1.productAddToBasket(catalog[1], 1);

	console.log('Корзина:')
	console.table(user1.showBasket);
	console.log(`Итого: ${user1.showTotalBasket}`);

console.groupEnd();

/* класс User хранит некоторую информацию о пользователе и его корзину товаров,
а так же методы работы с корзиной, можно модернизировать добавив метод удаления
товара из корзины, как пример, вариантов много.
класс Product сделан как шаблон для обьекта товара в магазине. в него можно 
добавить дополнительные методы, например вывод категории товара, для облегчения 
поиска и обработки в каталоге */

console.warn('===============================================================>');

