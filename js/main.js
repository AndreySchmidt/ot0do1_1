const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

const feedbackSwiper = new Swiper(".feedback__slider", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

const certSwiper = new Swiper(".certificates__slider", {
  loop: true,
  // slidesPerView: 3,
  spaseBetween: 20,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
  },
});

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (title) {
  title.addEventListener("click", function () {
    const currentText = title.parentElement.querySelector(".accordeon__text");
    title.classList.toggle("accordeon__title--active");
    currentText.classList.toggle("accordeon__text--active");
  });
});
