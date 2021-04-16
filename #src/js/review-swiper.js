//инициализация кастомной прокрутки в текстовых блоках карточек отзывов
$('.custom-scroll').mCustomScrollbar({
   axis: 'y',              // вертикальный скролл 
   theme: 'dark-3',  // тема 
   scrollInertia: '330',   // продолжительность прокрутки, значение в миллисекундах 
   setHeight: '68',      // высота блока (переписывает CSS) 
   mouseWheel: {
      deltaFactor: 8    // кол-во пикселей на одну прокрутку колёсика мыши 
   }
});
(function ($) {
   $(window).on('load', function () {
      $('.custom-scroll').mCustomScrollbar();
   });
})(jQuery);

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
   console.log('Hello');

   reviewsSwiper.slideNext();
});