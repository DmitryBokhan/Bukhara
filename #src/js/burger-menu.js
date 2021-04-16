const menuLinks = document.querySelectorAll('.burger-link'); //получаем все объекты у которых есть класс popup-link
const body = document.querySelector('body'); // получаем тег body, далее будем блокировать скролл у него
const lockPadding = document.querySelectorAll('.lock-padding');//получаем все объекты у которых есть класс lock-padding, далле будем фиксировать эти объекты при появдении попапа, это необходимо для того, чтобы не было смещения при скрытии прокрутки у браузера
//примечание
// .lock-padding - класс присваиваетя контейнерам (например хедеру), для того, чтобы избегать сдвига (дерганья) контента при открытии попапа и скрытии скрола браузера.

let unlock = true;// переменная далее поможет избежать двойных нажатий

const timeout = 800; //время анимации

if (menuLinks.length > 0) {
   for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener("click", function (e) { // ловим событие при клике
         const menuName = menuLink.getAttribute('href').replace('#', ''); //получаем имя идентификатора без #
         const curentMenu = document.getElementById(menuName); // получаем сам объект по имени  
         menuOpen(curentMenu); //функция откроет наш попап
         e.preventDefault(); // запретим перезагрузку страницы (блоктруем дальнейшкю работу ссылки)
      });
   }
}

const menuCloseIcon = document.querySelectorAll('.close-popup'); //закрываем попап, добавим класс close-popup к кнопке закрытия попапа
if (menuCloseIcon.length > 0) {
   for (let index = 0; index < menuCloseIcon.length; index++) {
      const el = menuCloseIcon[index];
      el.addEventListener('click', function (e) {
         menuClose(el.closest('.popupjs'));
         e.preventDefault();
      })
   }
}

function menuOpen(curentMenu) {
   if (curentMenu && unlock) {
      const menuActive = document.querySelector('.popupjs.open');
      if (menuActive) {
         menuClose(menuActive, false);
      } else {
         bodyLock();
      }
      curentMenu.classList.add('open');
      curentMenu.addEventListener('click', function (e) {
         if (!e.target.closest('.popupjs__content')) {
            menuClose(e.target.closest('.popupjs'));
         }
      });
   }
}

function bodyLock() {
   const lockPaddingValue = window.innerWidth - document.querySelector('.popupjs').offsetWidth + 'px';
   console.log(lockPaddingValue);

   if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
         const el = lockPadding[index];
         el.style.paddingRight = lockPaddingValue;
      }
   }

   body.style.paddingRight = lockPaddingValue;
   body.classList.add('lock');

   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}


function menuClose(menuActive, doUnlock = true) {
   if (unlock) {
      menuActive.classList.remove('open');
      if (doUnlock) {
         bodyUnLock();
      }
   }
}

//функция возвращает скрол (если он был) после закрытия попапа через время = timeout 
function bodyUnLock() {
   setTimeout(function () {
      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = '0px';
         }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('lock');
   }, timeout);
   unlock = false;
   setTimeout(function () {
      unlock = true;
   }, timeout);
}

//Закрываем меню нажатием на ESC 
document.addEventListener('keydown', function (e) {
   if (e.which === 27) {
      const menuActive = document.querySelector('.popupjs.open');
      menuClose(menuActive);
   }
});


//ПОЛИФИЛЫ ДЛЯ ПОДДЕРЖКИ СТАРЫХ БРАУЗЕРОВ

(function () {
   //проверяем поддержку
   if (!Element.prototype.closest) {
      //реализуем
      Element.prototype.closest = function (css) {
         var node = this;
         while (node) {
            if (node.matches(css)) return node;
            else node = node.parentElement;
         }
         return null;
      };
   }
})();
(function () {
   //проверяем поддержку
   if (!Element.prototype.matches) {
      //определяем свойство
      Element.prototype.matches = Element.prototype.matchesSelector ||
         Element.prototype.webkitMatchesSelector ||
         Element.prototype.mozMatchesSelector ||
         Element.prototype.msMatchesSelector;
   }
})();