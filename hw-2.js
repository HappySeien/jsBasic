// 1. Почему код дает именно такие результаты?
// Запускаю в среде node поэтому вместо alert буду использовать console.log

// Код закоментирован, что бы не мешать выполнению других заданий
/*
let a = 1, b = 1, c, d;

c = ++a; console.log(c); // 2
d = b++; console.log(d); // 1
c = (2+ ++a); console.log(c); // 5
d = (2+ b++); console.log(d); // 4
console.log(a); // 3
console.log(b); // 3
*/

/* Код выдает такие результаты потому что:
Важные для ответа определения:
Инкремент — означает увеличение операнда на установленный фиксированный шаг (как
правило, единицу).
декремент — обратная инкременту операция: 
Изначально переменные a, b = 1, a c, d не имеют значения, далее c = ++a; в пере
менную c присваивается прединкрементное значение ++a на выходе получаем 2 потому
что прединкрементное значение(знаки слева) сначала проводит операцию над значе
нием а затем выводит результат. Далее d = b++; Тут используется постинкремент,
то есть мы сначала выводим значение, а уже затем увеличиваем операнд(часто испо
льзуется в циклах в качестве счетчиков). Далее c = (2+ ++a); получается 5 благо
даря предикременту. Далее d = (2+ b++); получается 4 из за применения постинкре
мента. После всех операций переменные a, b становятся равны 3 так как к изнача
льной 1 мы еще 2 раза прибовляли по 1.*/


// 2. Чему будет равен x?
// Код закоментирован, что бы не мешать выполнению других заданий

/*
let a = 2;
let x = 1 + (a *= 2);

console.log(x);
*/

/* Ответом будет 5, так как js использует математические правила. 
a *= 2 это тоже самое что и а = а * 2
*/


/* 3. Объявить две целочисленные переменные — a и b и задать им произвольные 
начальные значения. Затем написать скрипт, который работает по следующему 
принципу:
 если a и b положительные, вывести их разность;
 если а и b отрицательные, вывести их произведение;
 если а и b разных знаков, вывести их сумму;
Ноль можно считать положительным числом.*/


// рандомное число в заданном диапозоне
function randomInt(min_, max_) {
	max_ = Math.floor(max_);
	min_ = Math.ceil(min_);
	return Math.floor(Math.random() * (max_ - min_) + min_);
};


// Калькулятор, работающий по принципу описанному в задании
function randCalc(x, y) {
	if (Math.sign(x) == 1 && Math.sign(y) == 1) {
		return x - y;
	} else if (Math.sign(x) == -1 && Math.sign(y) == -1) {
		return -(x * y);
	} else {
		return x + y;
	}
};


let a = randomInt(-100, 100);
let b = randomInt(-100, 100);

// Для проверки результатов
console.log(`Задание 3, значение a для теста: ${a}`);
console.log(`Задание 3, значение b для теста: ${b}`);

console.log(randCalc(a, b));
console.log('==============================================================>');

/* Функции модуля Math использованные в решении:
Math.floor - округляет число вниз.
Math.ceil - Округляет аргумент до ближайшего большего целого(округляет вверх)
Math.sign - Проверяет число на знак(положительное(1), отрицательное(-1), ноль(0))
*/


/* 4. Присвоить переменной а значение в промежутке [0..15]. 
С помощью оператора switch организовать вывод чисел от a до 15.*/

let z = randomInt(0, 15 + 1);  // От 0 до 15 включительно

// Для проверки
console.log(`Задание 4, значение для теста: ${z}`);

switch(z) {
	case 1: 
		process.stdout.write('1, ');
	case 2: 
		process.stdout.write('2, ');
	case 3: 
		process.stdout.write('3, ');
	case 4: 
		process.stdout.write('4, ');
	case 5: 
		process.stdout.write('5, ');
	case 6: 
		process.stdout.write('6, ');
	case 7: 
		process.stdout.write('7, ');
	case 8: 
		process.stdout.write('8, ');
	case 9: 
		process.stdout.write('9, ');
	case 10: 
		process.stdout.write('10, ');
	case 11: 
		process.stdout.write('11, ');
	case 12: 
		process.stdout.write('12, ');
	case 13: 
		process.stdout.write('13, ');
	case 14: 
		process.stdout.write('14, ');
	default: 
		process.stdout.write('15.\n');
		break;
};

console.log('==============================================================>');

/* process.stdout.write - команда в node js используется для чтения потока
вывода из консоли, значения выводятся в одну строку.


/* 5. Реализовать четыре основные арифметические операции в виде функций с двумя
параметрами. Обязательно использовать оператор return.*/


// Сложение
function addition(x, y) {
	return x + y;
};


// Вычитание
function subtraction(x, y) {
	return x - y;
};


// Умножение
function multiplication(x, y) {
	return x * y;
};


// Деление
function division(x, y) {
	return x / y;
};


/* 6. Реализовать функцию с тремя параметрами: 
function mathOperation(arg1, arg2, operation),где arg1, arg2 — значения 
аргументов, operation — строка с названием операции. Взависимости от переданного
значения выполнить одну из арифметических операций(использовать функции из 
пункта 5) и вернуть полученное значение (применить switch).*/


function mathOperation(arg1, arg2, operation) {
	switch(operation.toLowerCase()) {
		case '+':
		case 'сумма':
		case 'сложение':
			console.log(addition(arg1, arg2));
			break;
		case '-':
		case 'вычитание':
		case 'разность':
			console.log(subtraction(arg1, arg2));
			break;
		case '*':
		case 'умножение':
		case 'произведение':
			console.log(multiplication(arg1, arg2));
			break;
		case '/':
		case 'деление':
			console.log(division(arg1, arg2));
			break;
	};
};


// Тесты
console.log('Задание 6');
console.log('+');
mathOperation(2, 3, '+');
mathOperation(3, 3, 'Сумма');
console.log('-')
mathOperation(5, 3, 'разность');
mathOperation(10, 5, '-');
console.log('*')
mathOperation(2, 3, 'ПроизвеДение');
mathOperation(3, 3, '*');
console.log('/')
mathOperation(10, 3, '/');

console.log('==============================================================>');


// 7. * Сравнить null и 0. Объяснить результат.
console.log('Задание 7');
console.log(`${null == 0}, не строгое сравнение`); // false
console.log(`${null === 0}, строгое сравнение`);  // false
console.log(`${null > 0}, больше`);  // false
console.log(`${null < 0}, меньше`);  // false
console.log(`${null <= 0}, меньше, либо равен`);  // true
console.log(`${null >= 0}, больше, либо равен`);  // true

/*  Причина подобных результатов в особенностях работы интерпритатора js,
а именно в работе алгоритма преобразования данных.
Не строгое равенство и сравнения < <= > >= работают по разному.
Любые сравнения преобразуют null в число +0 и сравнивают как число, в то же
время при нестрогом сравнении == типы null и undefined ни к чему не приводятся.
При строгом сравнении в первую очередь сравнивается тип данных, таким образом
null === 0 или '5' === 5 вернут false, так как типы данных разные.*/

console.log('==============================================================>');


/* 8. * С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val — заданное число, pow –— степень.*/


// Возведение в степень
function power(val, pow) {
	return pow == 1 ? val : val * power(val, --pow);
};


// тесты
console.log('Задание 8');
console.log(power(3, 2));
console.log(power(3, 3));
console.log(power(5, 2));
console.log(power(10, 6));
console.log(power(4, 3));
console.log(power(2, 4));
