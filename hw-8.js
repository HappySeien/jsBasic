// 1. Продумать, где можно применить замыкания для практикума из седьмого урока.
/* В качестве примера возьму let lastId = 0; идентификатор из прошлых дз, его обьявление можно заменить на 
подобное замыкание:

function lastId() {
	let lastId = 0;

	function upId() {
	return lastId++;
	}

	return upId;
} */

// 2. Не выполняя код, ответить, что выведет браузер и почему:
//  a. Оператор if проверяет условие, что в глобальной области window нет "a".
//  Переменная "а" объявлена в локальной области конструкции if, следовательно alert |==> undefind
if (!("a" in window)) {
    var a = 1;
    }
alert(a);

// b.   Ошибка, переменная "а" не объявлена в глобальной области видимости.
var b = function a(x) {
    x && a(--x);
    };
alert(a);

//  c.  Здесь, при объявлении функции в области видимости происходит объявение переменной "а" со значеним функции.
//  При создании переменной "а" мы не присваиваем ей значение, alert |==> function a(x){return x * 2;}
//  Если перемменной "а" мы присвоим значение, то присвоение будет иметь приоритет.
function a(x) {
    return x * 2;
    }
var a;
alert(a);

//  d. Аргументы функции - тот же массив, последнему элементу в теле функции присвоили значение 10, 
//  его и выкинул alert |==> 10.
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
    }
b(1, 2, 3);

//  e. метод call в качестве агрумента получил null, вызываемая функция ссылается на глобальный объект 
//  window.a, в котором null |==> вывод [obgect Window]
function a() {
    alert(this);
    }
a.call(null); 