$(document).ready(function() {

  //Slide out nav menu
  $navIcon = $('.nav-icon');
  $navIcon.on('click', function(){
    //for hamburger
    $('.bar-top').toggleClass('top-open');
    $('.bar-bottom').toggleClass('bottom-open');
    $('.bar-middle').toggleClass('middle-open');


    //for slideout - open
    $('.nav ul').addClass('hide')
    $('.nav-wrap').toggleClass('show-nav');
    $('.nav ul').fadeIn(800);
  });

    // for slideout close
  $('.nav ul a').on('click', function(){
    $('.nav-wrap').toggleClass('show-nav');
    $('.nav ul').fadeOut(800);
    $('.bar-top').toggleClass('top-open');
    $('.bar-bottom').toggleClass('bottom-open');
    $('.bar-middle').toggleClass('middle-open');
  });

});