$(function() {
  $(".cs-nav-tog").on("click", function() {
    $(".navbar").toggleClass("nav-opened");
  });

  $(window).on("scroll", function(e) {
    if ($(window).scrollTop() > 300) {
      $(".navbar").addClass("nav-scrolled");
      console.log($(window).scrollTop());
    } else {
      $(".navbar").removeClass("nav-scrolled");
    }
  });

  $(".navbar .nav-link").on("click", function() {
    $(".navbar").removeClass("nav-opened");
  });
});
