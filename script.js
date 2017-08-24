$(document).ready(function() {

  //Slide out nav menu
  $navButton = $('.nav-menu-placeholder');
  $navButton.on('click', function(){
    $('.nav ul').addClass('hide')
    $('.nav-wrap').toggleClass('show-nav');
    $('.nav ul').fadeIn(800);
  });

  $('.nav ul a').on('click', function(){
    $('.nav-wrap').toggleClass('show-nav');
    $('.nav ul').fadeOut(800);
  });

});