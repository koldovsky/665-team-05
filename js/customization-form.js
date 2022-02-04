(function () {
    const modalForm = document.querySelector('.customization__form');
    const modalOpen = document.querySelector('.customization__button__button');
    const modalClose = document.querySelector('.close__icon');
    const body = document.querySelector('body');
    const form = document.querySelector('.form__container__inputs');


    modalOpen.addEventListener('click', () => {
        modalForm.classList.toggle('open');
        body.classList.toggle('open')
    });
    modalClose.addEventListener('click', () => {
        modalForm.classList.toggle('open', false);
        body.classList.toggle('open', false);
    });
    window.addEventListener('click', (e) => {
        if (e.target === modalForm) {
            modalForm.classList.toggle('open', false);
            body.classList.toggle('open', false);
        }
    });

    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.querySelector('.contact-form-status');
        const data = new FormData(event.target);
        try {
            await fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });
            status.innerHTML = "Thanks for your request!";
            form.reset();
        } catch {
            status.innerHTML = "Oops! There was a problem requesting your form";
        }
    }
    form.addEventListener("submit", handleSubmit)
})();

