
$(".hamburger").click(function () {
  $(".mobile-nav").toggle();
});




$(document).ready(function () {
  var $carousel = $(".owl-carousel-cars");

  $carousel.owlCarousel({
    loop: true,
    nav: true,
    margin: 20,
    navText: [" ", ""], // You can customize the arrows here
    responsive: {
      0: {
        items: 1, // Shows 1 item on screens with width 0px to 599px
      },
      600: {
        items: 3, // Shows 3 items on screens with width 600px to 999px
      },
      1000: {
        items: 3, // Shows 3 items on screens 1000px and wider
      },
    },
  });

  // Adding custom navigation functionality
  $('.nav-left').click(function() {
    $carousel.trigger('prev.owl.carousel');
  });

  $('.nav-right').click(function() {
    $carousel.trigger('next.owl.carousel');
  });
});







