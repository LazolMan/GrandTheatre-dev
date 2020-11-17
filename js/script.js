var slider = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  lazy: true,
  spaceBetween: 30,

  navigation: {
    nextEl: ".main-slider__bttn-next",
    prevEl: ".main-slider__bttn-prev",
  },
});
