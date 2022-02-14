(function () {
  const catalog = [
    {
      id: "1",
      title: "Shirt & Tops",
      img: "img/catalog_block/girl1.jpg",
      alt: "girl in shirt",
      description:
        "Light tops and shirts made from natural materials such as linen, silk and others",
    },
    {
      id: "2",
      title: "Dresses",
      img: "img/catalog_block/girl2.webp",
      alt: "girl in dress",
      description:
        "Casual and evening dresses in mini and midi lengths for your mazing looks",
    },
    {
      id: "3",
      title: "Pants",
      img: "img/catalog_block/girl3.webp",
      alt: "girl in pants",
      description:
        "Pants made from natural fabrics and our own collection of jeans that will last you for years",
    },
    {
      id: "4",
      title: "Accessories",
      img: "img/catalog_block/girl4.webp",
      alt: "girl with accessories",
      description:
        "Belts, rings, gloves necklaces and more for the finishing touch to your look",
    },
  ];

  let currentSlideIdx = 0;

  function renderCatalog() {
    const catalogContainer = document.querySelector(".catalog_carousel");
    catalogContainer.innerHTML = `
            <div class="img_container">
            <img src="${catalog[currentSlideIdx].img}" alt="${catalog[currentSlideIdx].alt}"/>
            </div>
            <br>
            <h4>${catalog[currentSlideIdx].title}</h4>
            <br>
            <p>${catalog[currentSlideIdx].description}</p>
            <br>
            `;
  }

  function showNextSlide() {
    currentSlideIdx =
      currentSlideIdx + 1 >= catalog.length ? 0 : currentSlideIdx + 1;
    renderCatalog();
  }

  function showPrevSlide() {
    currentSlideIdx =
      currentSlideIdx - 1 < 0 ? catalog.length - 1 : currentSlideIdx - 1;
    renderCatalog();
  }

  renderCatalog();

  document
    .querySelector(".catalog__body_button_forward")
    .addEventListener("click", showNextSlide);

  document
    .querySelector(".catalog__body_button_back")
    .addEventListener("click", showPrevSlide);

  // setInterval(showNextSlide, 15000);
})();
