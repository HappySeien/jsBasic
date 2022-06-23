`use strict`
// Создаем пользователя и каталог
const user1 = loadUser() != null ? loadUser() : new User(1, 'Влад', 'Горякин', 'test1@post.com', 'postAddr'); 
saveUser(user1);
const jsCatalog = Array();
const catalog = document.querySelector('#catalog');
const showBasket = document.querySelector('#basket');
console.log(showBasket);

// Наполняем каталог в js
genCatalog(jsCatalog);
console.log(jsCatalog);


// Генерируем каталог на странице
drowCatalog(catalog, jsCatalog);

// Генерируем корзину на странице
drowBasket(showBasket);

// Устанавливаем отображение товаров к корзине
const pBasket = document.querySelector('#pbasket');
console.log(pBasket);
pBasket.textContent = user1.showTotalBasket;

// Настраиваем события на кнопке "в корзину"
catalog.addEventListener('click', function(e) {
  if(e.target.tagName == 'BUTTON') {
    addToBasket(user1, jsCatalog[e.target.dataset.id]);
    pBasket.textContent = user1.showTotalBasket;
    console.table(user1.showUserBasket);
  }
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
        popup.insertAdjacentHTML('beforeEnd',
            `<div class="img-privios"><</div>
            <img src="${e.target.getAttribute('src')}" class="scale">
             <div class="img-next">></div>`);
            
    }
});


