$(function() {
  // Initializing AOS
  AOS.init();

  //Navbar toggler class for responsive menu
  $(".cs-nav-tog").on("click", function() {
    $(".navbar").toggleClass("nav-opened");
  });

  $(".navbar .nav-link").on("click", function() {
    $(".navbar").removeClass("nav-opened");
  });

  //Header scroll behavior fix
  $(window).on("scroll", function(e) {
    if ($(window).scrollTop() > 300) {
      $(".navbar").addClass("nav-scrolled");
      console.log($(window).scrollTop());
    } else {
      $(".navbar").removeClass("nav-scrolled");
    }
  });
});
