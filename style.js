var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 40,
    },

    576: {
      slidesPerView: 2,
      spaceBetweenSlides: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetweenSlides: 40,
    },

    1200: {
      slidesPerView: 3,
      spaceBetweenSlides: 40,
    },

    1400: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
    1600: {
      slidesPerView: 4,
      spaceBetweenSlides: 40,
    },
  },
});
