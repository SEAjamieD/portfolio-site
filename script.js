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

  // Thanks to this resource: https://stackoverflow.com/questions/4326845/how-can-i-determine-the-direction-of-a-jquery-scroll-event

  //Set the last scroll top to 0 to begin
  var lastScrollTop = 0;
  //If the window moves at all - start the function
  $(window).scroll(function() {
    //set the current scroll top to wherever you are right now
    var currentScrollTop = $(this).scrollTop();
    //if the where you are now is higher than where you just were, you're going up
    if ((currentScrollTop > lastScrollTop) && (currentScrollTop > 300)) {
      //execute the going up function
      $navIcon.fadeOut();
      } else {
      // otherwise you're going down
      // execute the going down function
      $navIcon.fadeIn();
      };
      // reset the last scrolltop to where you are now
      lastScrollTop = currentScrollTop;
    });

});  //End jquery



  // var lastScrollTop = 0;
  // $(window).scroll(function(){
  //    var st = $(this).scrollTop();
  //    if (st > lastScrollTop){
  //        // downscroll code
  //        $navIcon.fadeOut()
  //    } else {
  //       // upscroll code
  //       $navIcon.fadeIn()
  //    }
  //    lastScrollTop = st;
  // });
