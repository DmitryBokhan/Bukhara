
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
};
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
})();;
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
      //Фракция (текущая страница слайдера из общего числа)
      type: 'fraction',
      // добовляем дополнительное описание (Фото * из *)
      renderFraction: function (currentClass, totalClass) {
         return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
      },
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
      pageUpDown: false,
   },

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


   /*Скорость(плавность) переключения слайдов*/
   speed: 800,

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

});;


//инициализация слайдкра для отзывов
reviewsSwiper = new Swiper('.reviews-slider', {
   //Стрелки
   // navigation: {
   //    // nextEl: '.swiper-button-next-review',
   //    // prevEl: '.swiper-button-prev-review',
   // },
   // Навигация
   // Буллеты, текущее положение,прогресбар
   pagination: {
      //el: '.swiper-pagination',
      //Фракция (текущая страница слайдера из общего числа)
      type: 'fraction',
      // добовляем дополнительное описание (Фото * из *)
      renderFraction: function (currentClass, totalClass) {
         return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
      },

   },



   //включение/отключение 
   //перетаскивания на ПК
   simulateTouch: true,
   //Чувствительность свойства
   touchRadio: 1,
   //Угол срабатывания свойства
   touchAngel: 45,
   //Курсор перетаскивания
   grabCursor: false,

   //Переключение при клике на слайд
   slideToClickedSlide: false,



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


   //Автовысота
   autoHeight: false,

   //Количество слайдов для показа
   slidesPerView: 1, //также принемает значение 'auto'

   //Отключение функционала 
   //если слайдов меньшн чем нужно
   watchOwerflow: true,

   //Отступ между слайдами
   spaceBetween: 10,

   //Количество пролистываемых слайдеров
   slidesPerGroup: 1,

   //Активный слйд по центру
   centeredSlides: false,

   //стартовый слайд
   initialSlide: 0,

   //Мультирядность
   slidesPerColumn: 1,

   //Бесконечный слайдер
   loop: false,

   //Количество дублирующих сдайдов  
   loopedSlides: 0,

   //Свободный режим
   freeMode: false,




   /*Скорость(плавность) переключения слайдов*/
   speed: 800,


   //брейк поинты (адаприв)
   //ширина экрана
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      691: {
         slidesPerView: 2,
      },
      769: {
         slidesPerView: 2,
      },
      1124: {
         slidesPerView: 3,
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

});

const swiperPrev = document.getElementById('reviewsSwiperPrev')
const swiperNext = document.getElementById('reviewsSwiperNext')

swiperPrev.addEventListener('click', () => {
   reviewsSwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
   reviewsSwiper.slideNext();
});


//инициализация кастомной прокрутки в текстовых блоках карточек отзывов
$('.custom-scroll').mCustomScrollbar({
   axis: 'y',              // вертикальный скролл 
   theme: 'dark-3',  // тема 
   scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
   setHeight: '70',      // высота блока (переписывает CSS) 
   mouseWheel: {
      deltaFactor: 8    // кол-во пикселей на одну прокрутку колёсика мыши 
   }
});
(function ($) {
   $(window).on('load', function () {
      $('.custom-scroll').mCustomScrollbar();
   });
})(jQuery);;

