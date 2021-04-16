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

});