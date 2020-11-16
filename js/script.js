var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  lazy: true,

  // If we need pagination
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__bttn-next",
    prevEl: ".main-slider__bttn-prev",
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
});
