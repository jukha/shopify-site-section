const leftSwiper = new Swiper("#swiper-left", {
  loop: true,
  // speed: 1000,
  slidesPerView: 1.25,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1199: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".slider-outer-wrapper.left .swiper-button-next",
    prevEl: ".slider-outer-wrapper.left .swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination-left",
  },

  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      this.slides.forEach(function (slide) {
        slide.querySelector("img").style.opacity = "0.3";
        slide.querySelector(".slider-text").style.opacity = "0";
      });

      setTimeout(() => {
        activeSlide.querySelector("img").style.opacity = "1";
        activeSlide.querySelector(".slider-text").style.opacity = "1";
      }, 400);
    },
  },
});

const rightSwiper = new Swiper("#swiper-right", {
  loop: true,
  slidesPerView: 1.25,
  spaceBetween: 10,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 40,
    },

    1199: {
      slidesPerView: 1,
    },
  },
  navigation: {
    nextEl: ".slider-outer-wrapper.right .swiper-button-next",
    prevEl: ".slider-outer-wrapper.right .swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination-right",
  },

  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      this.slides.forEach(function (slide) {
        slide.querySelector("img").style.opacity = "0.3";
        slide.querySelector(".slider-text").style.opacity = "0";
      });

      setTimeout(() => {
        activeSlide.querySelector("img").style.opacity = "1";
        activeSlide.querySelector(".slider-text").style.opacity = "1";
      }, 400);
    },
  },
});

new Swiper("#about-product-slider .swiper", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: "#about-product-slider .next-btn",
    prevEl: "#about-product-slider .prev-btn"
  }
});

const desktopSliders = document.querySelectorAll(".slider-outer-wrapper");
const leftActiveEl = document.querySelector(".active-element.left");
const rightActiveEl = document.querySelector(".active-element.right");

desktopSliders.forEach((element) => {
  element.addEventListener("mouseover", function () {
    if (this.classList.contains("left")) {
      leftActiveEl.classList.add("bg-highlight");
      rightActiveEl.classList.remove("bg-highlight");
      this.classList.add("activeSlider");
      document
        .querySelector(".right.slider-outer-wrapper")
        .classList.remove("activeSlider");
    }
    if (this.classList.contains("right")) {
      rightActiveEl.classList.add("bg-highlight");
      leftActiveEl.classList.remove("bg-highlight");
      this.classList.add("activeSlider");
      document
        .querySelector(".left.slider-outer-wrapper")
        .classList.remove("activeSlider");
    }
  });
});
