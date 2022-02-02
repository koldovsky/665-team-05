(function(){
const modalForm = document.querySelector('.customization__form');
const modalOpen = document.querySelector('.customization__button__button');
const modalClose = document.querySelector('.close__icon');
const body = document.querySelector('body');
const requestBtn = document.querySelector('.form__button');
const countField = document.querySelector('.count__test');
const nameInput = document.querySelector('.input__name');    
const nameInputContainer = document.querySelector('.form__input__name');    


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
        body.style.overflow = "auto";
    }
}  


function symbolCounter(){
    const nameInputValue = nameInput.value;
    if (nameInputValue !== ""){
        countField.style.display = "block";
        nameInputContainer.style.margin = "0";
    return countField.innerText = "You entered " + nameInputValue.length + " symbols";
    }else{
            nameInputContainer.style.margin = "0 0 24px 0"
    return countField.style.display = "none"
}
    
}
setInterval(symbolCounter, 500);

})();

