`use strict`
// Загружаем пользователя и данные о нем
const user1 = loadUser();
const userProfile = document.querySelector('#user-profile');
userProfile.textContent = user1.fullName;

// Рисуем основу страницы
const wrapperDiw = document.querySelector('#wrapper');
drowBasketPage(wrapperDiw);

// Рисуем вкладку корзина
const idBasketCatalog = document.querySelector('#basket-catalog');
const idTotalBasket = document.querySelector('#totalBasket');
drowUserBasket(idBasketCatalog, user1._basket);
idTotalBasket.textContent = user1.showTotalBasket;

// Отрисовываем форму почтовых данных
const postAdress = document.querySelector('.post-adress')

drowPostAdress(postAdress);

// отрисовываем блок комментрария
const comments = document.querySelector('.comment');
drowComment(comments);

// создаем модальное окно для подверждения заказа
const userAdress = 'adress'; // Заглушка
drowConfirmWindow(wrapperDiw, userAdress);


// Настройка событий по кнопке удалить
idBasketCatalog.addEventListener('click', function(e) {
  if(e.target.tagName == 'BUTTON') {
    removeToBasket(user1, user1._basket[e.target.dataset.delete]);
    // заменил на автообновление страницы, странно, когда проверял перед отправкой
    // на гит вроде все перерисовывалось нормально
    location.reload();
    idTotalBasket.textContent = user1.showTotalBasket;
    console.table(user1.showUserBasket);
  }
});

// Настройка событий по кнопкам перехода
const orderDiv = document.querySelector('.order-div');
const basketMenu = document.querySelector('#basket-menu');
const postMenu = document.querySelector('#post-menu');
const commentMenu = document.querySelector('#comment-menu')

// Настройка событий по кнопке "далее" для корзины
basketMenu.addEventListener('click', function(e) {
  if(e.target.dataset.next == 'next') {
    postMenu.setAttribute('open', '');
    postMenu.focus();
    basketMenu.removeAttribute('open');
  }
});

// Настройка событий по кнопке "далее" для почтового адреса
postMenu.addEventListener('click', function(e) {
  if(e.target.dataset.continue == 'continue') {
    commentMenu.setAttribute('open', '');
    commentMenu.focus();
    postMenu.removeAttribute('open');
  }
});

// Настройка событий по кнопке оформить заказ
comments.addEventListener('click', function(e) {
  console.log(e.target.dataset.finish);
  if(e.target.dataset.finish == 'finish') {
    orderDiv.style.display = 'flex';
  }
});

// настройка события модального окна с инфо о заказе
orderDiv.addEventListener('click', function(e) {
    if( e.target.tagName === 'BUTTON' ) {
        orderDiv.style.display = 'none';
    }
});
