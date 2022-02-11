(function () {
  const modalOpenImages = document.querySelectorAll(".gallery__image");
  const modalContainer = document.querySelector(".gallery-carousel");
  const body = document.querySelector("body");
  const modalClose = document.querySelector(".gallery__close__icon");
  const btnBack = document.querySelector(".btn-back");
  const btnForward = document.querySelector(".btn-forward");

  const slides = [
    `<div> class="gallery__image-container"> <img src="img/gallery/women-1.png" alt="" 
      class="gallery__carousel__image"> </div>`,
    `<div class="gallery__image-container"> <img src="img/gallery/women-2.png" alt=""
      class="gallery__carousel__image"> </div>`,
    `<div class="gallery__image-container"> <img src="img/gallery/women-3.png" alt=""
      class="gallery__carousel__image"> </div>`,
    `<div class="gallery__image-container"> <img src="img/gallery/women-4.png" alt=""
      class="gallery__carousel__image"> </div>`,
    `<div class="gallery__image-container"> <img src="img/gallery/women-5.png" alt=""
      class="gallery__carousel__image"> </div>`,
    `<div class="gallery__image-container"> <img src="img/gallery/women-6.png" alt=""
      class="gallery__carousel__image"> </div>`
  ];
  let counter;

  function showCurrentSlide(index) {
    const slideContainer = document.querySelector('.gallery-carousel__images');
    slideContainer.innerHTML = slides[index];
    counter = index;
    return counter
  }

  function showNextSlide() {
    counter = counter + 1 >= slides.length ? 0 : counter + 1;
    showCurrentSlide(counter);
  }
  function showPreviousSlide() {
    counter = counter - 1 < 0 ? slides.length - 1 : counter - 1;
    showCurrentSlide(counter);
  }

  btnForward.addEventListener("click", showNextSlide);
  btnBack.addEventListener("click", showPreviousSlide);

  for (let index = 0; index < modalOpenImages.length; index++) {
    const modalOpenImage = modalOpenImages[index];
    modalOpenImage.addEventListener("click", () => {
      modalContainer.classList.toggle('open');
      body.classList.toggle("open");
      showCurrentSlide(index);
    });
  }
  modalClose.addEventListener("click", () => {
    modalContainer.classList.toggle("open", false);
    body.classList.toggle("open", false);

  });

  window.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      modalContainer.classList.toggle("open", false);
      body.classList.toggle("open", false);
    }
  });
})();