// Адаптивные картинки
function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();
$(document).ready(function () {
   $('.burger-menu').click(function (event) {
      $('.burger-menu,.menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });
});