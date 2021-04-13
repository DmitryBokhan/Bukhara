//подключаем свайпер для раздкла ABOUT
@@include('about-swiper.js');
@@include('burger-menu.js');

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
