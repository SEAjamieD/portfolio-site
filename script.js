$(document).ready(function() {

  //Slide out nav menu
  $navButton = $('.nav-menu-placeholder');
  $navButton.on('click', function(){
    $('.nav ul').toggleClass('hide')
    $('.nav-wrap').toggleClass('show-nav');
    $('.nav ul').fadeIn(1000);
    // $('.nav ul a').fadeIn(1000);
  });

  $('.nav ul a').on('click', function(){
    $('.nav-wrap').toggleClass('show-nav');
    // $('.nav ul').toggleClass('hide')
    $('.nav ul').fadeOut(1000);
  });

});