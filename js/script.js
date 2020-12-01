const menu = document.querySelector(".menu");
const menuCloseBttn = document.querySelector(".icon-close");
const menuOpenBttn = document.querySelector(".icon-menu");

function openMenu() {
  menuOpenBttn.style.display = "none";
  menu.style.left = "0";
}
function closeMenu() {
  menu.style.left = "-100%";
  menuOpenBttn.style.display = "inline";
}

menuOpenBttn.addEventListener("click", openMenu);
menuCloseBttn.addEventListener("click", closeMenu);

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
  speed: 500,

  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    993: {
      slidesPerView: 2.5,
    },
    442: {
      slidesPerView: 1.5,
    },
  },
});

let partnersSlider = new Swiper(".partners-slider__container", {
  direction: "horizontal",
  spaceBetween: 75,
  slidesPerView: 4,
  autoHeight: false,
  slidesPerColumn: 2,
  speed: 500,

  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    993: {
      slidesPerView: 4,
    },
    577: {
      slidesPerView: 2.5,
      slidesPerColumn: 2,
    },
    319: {
      slidesPerView: 2,
      slidesPerColumn: 2,
    },
  },
});