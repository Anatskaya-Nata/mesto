/*formSelector: '.popup__form',
inputSelector: '.popup__info',
submitButtonSelector: '.popup__button',
inactiveButtonClass: 'popup__button_inactive',
inputErrorClass: 'popup__info_type_error',
errorClass: 'popup__info-error_active'})*/


  const showError = ( formItem,inputItem,errorMessage, config) => {
   
   const errorItem =  formItem.querySelector(`.${inputItem.id}-error`);

    inputItem.classList.add(config.inputErrorClass);
  
    errorItem.textContent = errorMessage;
    errorItem.classList.add(config.errorClass)
 };

 const hideError = (formItem,inputItem, config) => {
   const errorItem =  formItem.querySelector(`.${inputItem.id}-error`);  
   inputItem.classList.remove(config.inputErrorClass);
    errorItem.classList.remove(config.errorClass);
    errorItem.textContent = ''
 };

 const checkInputValidity = (formItem, inputItem,config) => {
    if (!inputItem.validity.valid) {
     
      showError(formItem, inputItem, inputItem.validationMessage, config);
    } else {
      hideError(formItem, inputItem, config);
    }
  };

    function setEventListeners(formItem, config){
    const inputList = Array.from(formItem.querySelectorAll('.popup__info'));

    const buttonElement = formItem.querySelector('.popup__button');
    
    toggleButtonState(inputList, buttonElement,config);

    inputList.forEach((inputItem) => {
        console.log(inputList)
    inputItem.addEventListener('input', function () {
        console.log(inputItem)
      checkInputValidity(formItem, inputItem, config);
    toggleButtonState(inputList, buttonElement,config);
    });
  });
}


function hasInvalidInput(inputList,config){
    return inputList.some((inputItem) => {
    return !inputItem.validity.valid;
  
  });
  }

  function toggleButtonState(inputList,buttonElement,config){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(config.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
  } 
  }

function enableValidation(config){

    const formList = Array.from(document.querySelectorAll('.popup__form'));
   
    formList.forEach((formItem)  => {
       /* console.log(formItem) */ 
     formItem.addEventListener('submit',(evt) =>{
     evt.preventDefault();
     })
     setEventListeners(formItem, config)   
   }); 

  }
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__info-error_active'})


  

