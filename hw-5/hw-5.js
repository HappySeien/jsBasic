/*1. Создать функцию, генерирующую шахматную доску. Можно использовать любые 
html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, 
столбцы — латинскими буквами A, B, C, D, E, F, G, H.*/


const chessBoard = document.querySelector(".chessBoard");


// Создает шахматную доску
function createBoard (target) {
    const letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''];

    for (let i = 0; i <= 9; i++) {

        const div_row = document.createElement("div");
        div_row.className = 'chess-tr';
        div_row.innerHTML;
        target.appendChild(div_row);

        for (let item of letters) {
            const div_cell = document.createElement("div");

            if ((i > 0 && i < 9) && item == '') {
                div_cell.innerHTML = `${i}`;
            } else if ((i == 0 || i == 9)) {
                div_cell.innerHTML = `${item}`;
            } else {
                div_cell.className = 'cell'
            }   
            div_row.appendChild(div_cell);
        }

    }
}


createBoard(chessBoard);


/*2. Сделать генерацию корзины динамической: верстка корзины не должна находиться 
в HTML-структуре. Там должен быть только div, в который будет вставляться 
корзина, сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей». */

const basketDiv = document.querySelector(".basket");

const Basket = [
    {name: 'pc', price: 100000, quantity: 1},
    {name: 'keyboard', price: 1500, quantity: 4},
    {name: 'mouse', price: 250, quantity: 5}
];  // a, b



function totalPrice(values){
    const quantity_ = values.length;
    if (quantity_ == 0){
        return "Корзина пуста";
    };
    const total = values.reduce(
    	function(sum, item) {return sum + item.price * item.quantity}, 0
    	);
    return `В корзине ${quantity_} товаров на сумму ${total} рублей`
} ;


basketDiv.textContent = totalPrice(Basket);


/*3. * Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
каталога генерируется JS.*/

let Product = [
    {name: 'pc', price: 100000},
    {name: 'keyboard', price: 1500},
    {name: 'mouse', price: 250}
];


function generateCatalog(InCatalog) {
    const catalog = document.querySelector("#catalog");

    for (item of InCatalog) {
        const divCard = document.createElement("div");

        divCard.className = 'goodsCard';
        catalog.appendChild(divCard);

        const name_ = document.createElement('h2');
        const price_ = document.createElement('h3');

        name_.textContent = item.name;
        price_.textContent = item.price;

        divCard.appendChild(name_);
        divCard.appendChild(price_);
    };
};


generateCatalog(Product);