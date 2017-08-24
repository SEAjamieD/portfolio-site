$(document).ready(function() {
  $navButton = $('.nav-menu-placeholder');
  $navButton.on('click', function(){
    $('.nav-wrap').toggleClass('show-nav');
  });

  $('.close').on('click', function(){
    $('.nav-wrap').toggleClass('show-nav');
  });

});