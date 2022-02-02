(function() {
    const cards = [
        {
            id: "1",
            title: "Knitted Midi Dress",
            imgUrl: "img/collection-block/card__knitted-midi-dress.png",
            price: 150.00
        },
        {
            id: "2",
            title: "Blazer Dress",
            imgUrl: "img/collection-block/card__blazer-dress.png",
            price: 120.00
        },
        {
            id: "3",
            title: "White Blazer",
            imgUrl: "img/collection-block/card__white-blazer.png",
            price: 80.00
        },
        {
            id: "4",
            title: "Lace Top",
            imgUrl: "img/collection-block/card__lace-top.png",
            price: 20.00
        }

    ];

    function renderCollectionsCards(cards) {
        const cardsContainer = document.querySelector(".collection__cards");
        for (const card of cards) {
            cardsContainer.innerHTML += `
            <article class="collection__card">
                <img src="${card.imgUrl}" alt="${card.title}">
                <h4 class="collection__card-text">${card.title}</h4>
                <p class="card__price">${card.price.toFixed(2)} USD</p>
                <div class="collection__card-button">
                    <button class="collection-card-button__add-to-cart">
                        <span class="button__add-to-cart-text">Add to Cart</span><span class="plus"> +</span>
                    </button>
                </div>
            </article>
            ` 
        }
    }

    renderCollectionsCards(cards);

})();