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

});