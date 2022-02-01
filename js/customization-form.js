(function(){
const modalForm = document.querySelector('.customization__form');
const modalOpen = document.querySelector('.customization__button__button');
const modalClose = document.querySelector('.close__icon');
const body = document.querySelector('body');
const requestBtn = document.querySelector('.form__button');


modalOpen.onclick = function(){
    modalForm.style.display = "block";
    body.style.overflow = "hidden";        
}
modalClose.onclick = function(){
    modalForm.style.display = "none";
    body.style.overflow = "auto";
}
window.onclick = function(element){
    if(element.target === modalForm){
        modalForm.style.display = "none";
    }
}  
})();

