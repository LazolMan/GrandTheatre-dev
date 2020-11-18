let mainSlider = new Swiper(".main-slider__container", {
  direction: "horizontal",
  loop: true,
  lazy: true,
  spaceBetween: 30,

  navigation: {
    nextEl: ".main-slider__bttn-next",
    prevEl: ".main-slider__bttn-prev",
  },
});

let eventsSlider = new Swiper(".events-slider__container", {
  direction: "horizontal",
  loop: true,
  lazy: true,
  slidesPerView: 2.5,
});
