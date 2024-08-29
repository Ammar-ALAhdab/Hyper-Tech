$(document).ready(function () {
  // Adjust Height The Nav and Carousel
  let windowHeight = $(window).height(),
    navUHeight = $(".upper-nav").innerHeight(),
    navLHeight = $(".lower-nav").innerHeight();
  let carousel = $(".carousel.home-carousle");
  carousel.height(windowHeight - (navUHeight + navLHeight));
  let carouselItem = $(".carousel.home-carousle .carousel-item");
  carouselItem.height(windowHeight - (navUHeight + navLHeight));
  $(carousel, carouselItem).css("margin-top", `${navUHeight + navLHeight}px`);
});
