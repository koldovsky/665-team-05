(function() {
    const catalog = [
        {
            id: "1",
            title: "Shirt & Tops",
            img: "img/catalog_block/girl1.jpg",
            alt: "girl in shirt",
            descriptopn: "Light tops and shirts made from natural materials such as linen, silk and others"
        },
        {
            id: "2",
            title: "Dresses",
            img: "img/catalog_block/girl2.webp",
            alt: "girl in dress",
            descriptopn: "Casual and evening dresses in mini and midi lengths for your mazing looks"
        },
        {
            id: "3",
            title: "Pants",
            img: "img/catalog_block/girl3.webp",
            alt: "girl in pants",
            descriptopn: "Pants made from natural fabrics and our own collection of jeans that will last you for years"
        },
        {
            id: "4",
            title: "Accessories",
            img: "img/catalog_block/girl4.webp",
            alt: "girl with accessories",
            descriptopn: "Belts, rings, gloves necklaces and more for the finishing touch to your look"
        }
    ];

    function renderCatalog(catalog) {
        const catalogContainer = document.querySelector('.catalog__body');
        for (const item of catalog) {
            catalogContainer.innerHTML+= `
            <li class="catalog__doby__shirts">
            <img src="${catalog.img}" alt="${catalog.alt}"/>
            <h4>${catalog.title}</h4>
            <p>${catalog.descriptopn}</p>
            </li>
            `; 
        }
    }

    renderCatalog(catalog);

})();
