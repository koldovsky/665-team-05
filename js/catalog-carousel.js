(function () {
  const catalog = [
    {
      id: "1",
      title: "Shirt & Tops",
      img: "img/catalog_block/girl1.jpg",
      alt: "girl in shirt",
      descriptopn:
        "Light tops and shirts made from natural materials such as linen, silk and others",
    },
    {
      id: "2",
      title: "Dresses",
      img: "img/catalog_block/girl2.webp",
      alt: "girl in dress",
      descriptopn:
        "Casual and evening dresses in mini and midi lengths for your mazing looks",
    },
    {
      id: "3",
      title: "Pants",
      img: "img/catalog_block/girl3.webp",
      alt: "girl in pants",
      descriptopn:
        "Pants made from natural fabrics and our own collection of jeans that will last you for years",
    },
    {
      id: "4",
      title: "Accessories",
      img: "img/catalog_block/girl4.webp",
      alt: "girl with accessories",
      descriptopn:
        "Belts, rings, gloves necklaces and more for the finishing touch to your look",
    },
  ];

  let currentSlideIdx = 0;

  function renderCatalog() {
    const catalogContainer = document.querySelector(".catalog__body");
    catalogContainer.innerHTML = `
            <div class="catalog__doby__shirts">
            <img src="${catalog[currentSlideIdx].img}" alt="${catalog[currentSlideIdx].alt}"/>
            <h4>${catalog[currentSlideIdx].title}</h4>
            <p>${catalog[currentSlideIdx].descriptopn}</p>
            </div>
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
    .querySelector(".catalog__all_body_button_forward")
    .addEventListener("click", showNextSlide);

  document
    .querySelector(".catalog__all_body_button_back")
    .addEventListener("click", showPrevSlide);

  // setInterval(showNextSlide, 15000);
})();
