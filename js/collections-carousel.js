(function() {
    const cardSlides = [
        `<article class="collection__card">
                <img src="img/collection-block/card__knitted-midi-dress.png" alt="Knitted Midi Dress">
                <h4 class="collection__card-text">Knitted Midi Dress</h4>
                <p class="card__price">150.00 USD</p>
                <div class="collection__card-button">
                    <button class="collection-card-button__add-to-cart">
                        <span class="button__add-to-cart-text">Add to Cart</span><span class="plus"> +</span>
                    </button>
                </div>
            </article>`,
            `<article class="collection__card">
                <img src="img/collection-block/card__blazer-dress.png" alt="Blazer Dress">
                <h4 class="collection__card-text">Blazer Dress</h4>
                <p class="card__price">120.00 USD</p>
                <div class="collection__card-button">
                    <button class="collection-card-button__add-to-cart">
                        <span class="button__add-to-cart-text">Add to Cart</span><span class="plus"> +</span>
                    </button>
                </div>
            </article>`,
            `<article class="collection__card">
                <img src="img/collection-block/card__white-blazer.png" alt="White Blazer">
                <h4 class="collection__card-text">White Blazer</h4>
                <p class="card__price">80.00 USD</p>
                <div class="collection__card-button">
                    <button class="collection-card-button__add-to-cart">
                        <span class="button__add-to-cart-text">Add to Cart</span><span class="plus"> +</span>
                    </button>
                </div>
            </article>`,
            `<article class="collection__card">
                <img src="img/collection-block/card__lace-top.png" alt="Lace Top">
                <h4 class="collection__card-text">Lace Top</h4>
                <p class="card__price">20.00 USD</p>
                <div class="collection__card-button">
                    <button class="collection-card-button__add-to-cart">
                        <span class="button__add-to-cart-text">Add to Cart</span><span class="plus"> +</span>
                    </button>
                </div>
            </article>`
    ];

    let currentSlideIndex = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector(".cards__carousel-slide-container");
        slideContainer.innerHTML = cardSlides[currentSlideIndex];
        if (window.innerWidth >= 750) {
            const secondSlideIndex = currentSlideIndex + 1 >= cardSlides.length ? 0 : currentSlideIndex + 1;
            slideContainer.innerHTML += cardSlides[secondSlideIndex];
            if (window.innerWidth >= 990) {
                const thirdSlideIndex = secondSlideIndex + 1 >= cardSlides.length ? 0 : secondSlideIndex + 1;
                slideContainer.innerHTML += cardSlides[thirdSlideIndex];
            }
        } 
    }

    function showNextSlide() {
        currentSlideIndex = currentSlideIndex + 1 >= cardSlides.length ? 0 : currentSlideIndex + 1;
        showCurrentSlide();
    } 

    function showPrevSlide() {
        currentSlideIndex = currentSlideIndex - 1 < 0 ? cardSlides.length - 1 : currentSlideIndex - 1;
        showCurrentSlide();
    } 

    showCurrentSlide();

    document.querySelector(".cards__carousel-forward").addEventListener("click", showNextSlide);
    document.querySelector(".cards__carousel-back").addEventListener("click", showPrevSlide);
    
})();