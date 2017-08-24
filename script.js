$(document).ready(function() {
  $navButton = $('.nav-menu-placeholder');
  $navButton.on('click', function(){
    $('.nav-wrap').toggleClass('show-nav');
  });

  $('.nav ul a').on('click', function (){
    $('.nav-wrap').toggleClass('show-nav');
  });

});