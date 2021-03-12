$(document).ready(function () {
   $('.burger-menu').click(function (event) {
      $('.burger-menu,.second-menu__body,.second-menu__list').toggleClass('active');
      $('body').toggleClass('lock');
   });
});