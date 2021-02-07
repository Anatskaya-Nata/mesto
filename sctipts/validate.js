

  
const showError = (formItem,inputItem, errorMessage) => {
    const errorItem =  formItem.querySelector(`.${inputItem.id}-error`);
    inputItem.classList.add('popup__info_type_error');
    errorItem.textContent = errorMessage;
    errorItem.classList.add('popup__info-error_active')
 };

 const hideError = (formItem, inputItem) => {
    const errorItem =  formItem.querySelector(`.${inputItem.id}-error`);    
    errorItem.classList.remove('popup__info_type_error');
    errorItem.classList.remove('popup__info-error_active');
    errorItem.textContent = ''
 };

 const checkInputValidity = (formItem, inputItem) => {
    if (!inputItem.validity.valid) {
      
      showError(formItem, inputItem, inputItem.validationMessage);
    } else {
      hideError(formItem, inputItem);
    }
  };
 
 
  function setEventListeners(formItem){
    const inputList = Array.from(formItem.querySelectorAll('.popup__info'));
    const buttonElement = formItem.querySelector('.popup__button');
    
    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputItem) => {
    inputItem.addEventListener('input', function () {
      checkInputValidity(formItem, inputItem);
      toggleButtonState(inputList, buttonElement);
    });
  });
}

  

  function enableValidation(data){

    const formList = Array.from(document.querySelectorAll('.popup__form'));
    formList.forEach((formItem)  => {
     formItem.addEventListener('submit',(evt) =>{
     evt.preventDefault();
     })
     setEventListeners(formItem)   
   }); 

  }

   /*const formList = Array.from(document.querySelectorAll('.popup__form'));
   formList.forEach((formItem)  => {
    formItem.addEventListener('submit',(evt) =>{
    evt.preventDefault();
    })
    setEventListeners(formItem)   
  });*/ 

 


function hasInvalidInput(inputList){
    return inputList.some((inputItem) => {
    return !inputItem.validity.valid;
  
  });
  }

  function toggleButtonState(inputList,buttonElement){
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_inactive');
  } else {
    buttonElement.classList.remove('popup__button_inactive');
  } 
  }

  enableValidation()