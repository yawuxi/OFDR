$(document).ready(function () {
   $('.burger-menu').click(function (event) {
      $('.burger-menu,.second-menu__body').toggleClass('active');
      $('body').toggleClass('lock');
   });
});