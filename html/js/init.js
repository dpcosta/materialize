(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $(".dropdown-trigger").dropdown();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
