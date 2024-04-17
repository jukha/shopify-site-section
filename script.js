const swiper = new Swiper(".swiper", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
