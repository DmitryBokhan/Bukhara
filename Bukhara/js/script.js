//подключаем свайпер для раздкла ABOUT
new Swiper('.image-slider', {
   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // Навигация
   // Буллеты, текущее положение,прогресбар
   pagination: {
      //el: '.swiper-pagination',


      //буллеты
      /*
     clickable: true,
     //динамические буллеты
     dynamicBullets: true,
     //кастомные буллеты (с цифрами)
     renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
     },
     */


      //Фракция (текущая страница слайдера из общего числа)
      type: 'fraction',
      // добовляем дополнительное описание (Фото * из *)
      renderFraction: function (currentClass, totalClass) {
         return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
      },



      //Прогрессбар
      /*
      type: 'progressbar',
      */
   },

   //Скролл
   scrollbar: {
      // el: '.swiper-scrollbar',
      //возможность перктаскивать скролл
      // draggable: true
   },

   //включение/отключение 
   //перетаскивания на ПК
   simulateTouch: true,
   //Чувствительность свойства
   touchRadio: 1,
   //Угол срабатывания свойства
   touchAngel: 45,
   //Курсор перетаскивания
   grabCursor: true,

   //Переключение при клике на слайд
   slideToClickedSlide: true,

   //Навигация по хешу
   hashNavigation: {
      //отслеживать состояние
      watchState: true,
   },

   //Управление клавиатурой
   keyboard: {
      //Включить\выключить
      enabled: false,
      //Включить\выключить
      //только когда слайдер
      //в пределах вьюпорта
      onlyInViewport: true,
      //Включить\выключить
      //управлене клавишами
      //pageUp, pageDown
      pageUpDown: true,
   },

   //Управление колесом мыши
   // mousewheel: {
   //Чувствительность колеса
   // sensitivity: 1,
   //Класс оббъекта на котором
   //будет срабатывать прокрутка мыши
   //eventsTarget: ".image-slider",
   // },

   //Автовысота
   autoHeight: false,

   //Количество слайдов для показа
   slidesPerView: 2, //также принемает значение 'auto'

   //Отключение функционала 
   //если слайдов меньшн чем нужно
   watchOwerflow: true,

   //Отступ между слайдами
   spaceBetween: 20,

   //Количество пролистываемых слайдеров
   slidesPerGroup: 1,

   //Активный слйд по центру
   centeredSlides: false,

   //стартовый слайд
   initialSlide: 0,

   //Мультирядность
   slidesPerColumn: 1,

   //Бесконечный слайдер
   loop: true,

   //Количество дублирующих сдайдов  
   loopedSlides: 0,

   //Свободный режим
   freeMode: false,

   //Автопрокрутка
   /* autoplay: {
       //Пауза между прокруткой
       delay: 2000,
       //Закончить на послкднем слайде
       stopOnLastSlide: true,
       //Отключить после ручного переключения
       disableOnInteraction: false,
    },*/


   /*Скорость(плавность) переключения слайдов*/
   speed: 800,

   /*Вертикальный слайдер (+ дополнительно настраиваем CSS - смотри в файл style.css)*/
   //direction: 'vertical', //по умолчанию 'horizontal'

   //---------------------------------------
   /*Эффекты переключения слайдов */
   //effect: 'slide', //по умолчанию всегда он


   // effect: 'fade', // Эффект fade - смена прозрачности
   //Дополнение к fade
   //fadeEffect: {
   //параллельная смена прозрачности
   // crossFade: true,
   // },

   // effect: 'flip', //эффект Переворот
   // flipEffect: {
   //тень
   //    slideShadows: false,
   //Показ только активного слайда
   //    limitRotatin: false,
   // },


   //    effect: 'cube', //эффект Куб
   //    //Дополнение к cube
   //    cubeEffect: {
   //       //настройки тени
   //       slideShadows: true,
   //       shadow: true,
   //       shadowOffset: 20,
   //       shadowScale: 0.94,
   //    },


   //    effect: 'coverflow', //эввект Потока

   //    coverflowEffect: {
   //       //Угол
   //       rotate: 20,
   //       //Наложение
   //       stretch: 50,
   //       //Тень
   //       slideShadows: true,
   //    },
   //------------------------------------

   //брейк поинты (адаприв)
   //ширина экрана
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      481: {
         slidesPerView: 1,
      },
      556: {
         slidesPerView: 1,
      },
      906: {
         slidesPerView: 2,
      },
      1066: {
         slidesPerView: 2,
      },
   },


   //брейк поинты (адаприв)
   //соотношение сторон
   /*breakpoints: {
      '@0.75': {
         slidesPerView: 1,
      },
      '@1.00': {
         slidesPerView: 2,
      },
      '@1.50': {
         slidesPerView: 3,
      },
   },
   */

});;
const menuLinks = document.querySelectorAll('.burger-link'); //полкчаем все объекты у которых есть класс popup-link
const body = document.querySelector('body'); // получаем тег body, далее будем блокировать скролл у него
const lockPadding = document.querySelectorAll('.lock-padding');//получаем все объекты у которых есть класс lock-padding, далле будем фиксировать эти объекты при появдении попапа, это необходимо для того, чтобы не было смещения при скрытии прокрутки у браузера
//примечание
// .lock-padding - класс присваиваетя контейнерам (например хедеру), для того, чтобы избегать сдвига (дерганья) контента при открытии попапа и скрытии скрола браузера.

let unlock = true;// переменная далее поможет избежать двойных нажатий

const timeout = 800; //время анимации

if (menuLinks.length > 0) {
   for (let index = 0; index < menuLinks.length; index++) {
      const menuLink = menuLinks[index];
      menuLink.addEventListener("click", function (e) { // вешаем событие при клике
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
})();;

//Анимация подложки верхнего меню (при скролле)
window.onscroll = function showHeader() {
   let menu = document.querySelector('.fon-menu');

   if (window.pageYOffset > 10) {
      menu.classList.add('header_fixed');
      menu.classList.remove('header_fixed_hidden');

   }
   if (window.pageYOffset == 0) {
      menu.classList.remove('header_fixed');
      menu.classList.add('header_fixed_hidden');

   }

   // if (document.body.clientWidth <= 1122 && window.pageYOffset > 0) {
   //    menu.classList.remove('header_fixed');
   //    menu.classList.add('header_fixed_hidden');
   // }
}
