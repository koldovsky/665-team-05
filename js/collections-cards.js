(function() {

    async function loadCollectionsCards() {
        const response = await fetch('collection-cards.json')
        const cards = await response.json();
        renderCollectionsCards(cards);
    }

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

    loadCollectionsCards(cards);

})();