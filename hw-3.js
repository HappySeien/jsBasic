/* 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/


// Выводит числа в строку в заданном диапозоне
function q1(x, y) {
	let result = new String();
	while (x <= y) {
		result += `${x++} `;
	}
	return result;
}


// тесты
console.group('%c Задание 1. Тесты', 'color: green;');
	console.log(q1(0, 100));
console.groupEnd();

console.warn('===============================================================>');


/* 2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета 
стоимости корзины в зависимости от находящихся в ней товаров.*/


// Создает из данных обьект товара(типовой) и заносит его в корзину пользователя
function productAddtoBasket(name_, articleN_, price_, cnt_, basket) {
	let product = {
		name: name_,  // Наименование товара
		articleN: articleN_,  // Артикул товара
		price: price_,  // Цена товара
		cnt: cnt_  // Колличество товара
	};
	return basket.push(product);
}


const userBasket = Array();


// Тесты
console.group('%c Задание 2. Тесты', 'color: green;');
	productAddtoBasket('Nvidia RTX 370 TI', '178000565', 155000, 1, userBasket);
	productAddtoBasket('AMD Ryzen 7', '178000965', 45000, 1, userBasket);
	productAddtoBasket('RAM Hyper 16GB', '028010675', 25000, 2, userBasket);
	console.log('Корзина пользователя:');
	console.table(userBasket);
console.groupEnd();

console.warn('===============================================================>');


/* 3. Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/


// Считает стоимость корзины пользователя
function countBasketPrice(basket) {
	let totalBasket = null;
	for(let item of basket) {
		totalBasket += item.price;
	}
	return totalBasket;
}


// Тесты
console.group('%c Задание 3. Тесты', 'color: green;');
	console.log('Корзина пользователя:');
	console.table(userBasket);
	console.log(`Итого: ${countBasketPrice(userBasket)}`);
console.groupEnd();

console.warn('===============================================================>');


/* 4. * Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.*/


console.group('%c Задание 4.', 'color: green;');
	// process.stdout.write тут для вывода в строку, не нарушая условия задания
	for(let i = 0; i <= 9; process.stdout.write(`${i++} `)) {
		// Пусто
	}
console.groupEnd();

console.warn('\n===============================================================>');


/* 5. * Нарисовать пирамиду с 20 рядами с помощью console.log,
как показано на рисунке:
x
xx
xxx
xxxx
xxxxx
*/


console.group('%c Задание 5.', 'color: green;');
	for(let i = 'x'; i.length <= 20; i += 'x') {
		console.log(i);
	}
console.groupEnd();

console.warn('===============================================================>');
