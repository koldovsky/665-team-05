(function(){
const modalForm = document.querySelector('.customization__form');
const modalOpen = document.querySelector('.customization__button__button');
const modalClose = document.querySelector('.close__icon');

modalOpen.onclick = function(){
    modalForm.style.display = "block";
}
modalClose.onclick = function(){
    modalForm.style.display = "none";
}
window.onclick = function(e){
    if(e.target === modalForm){
        modalForm.style.display = "none";
    }
}
})();

