const formElement = document.querySelector('.popup__form');
const formInput = formElement.querySelector('.popup__info');
const formError = formElement.querySelector(`.${formInput.id}-error`); 

console.log(`.${formInput.id}-error`)
formInput.addEventListener('input', function (evt) {
   console.log(evt.target.validity.valid);
  });

  
const showError = (input, errorMessage) => {
    input.classList.add('popup__info_type_error');
    formError.textContent = errorMessage;
    
    formError.classList.add('popup__info-error_active')
 };

 const hideError = (input) => {
 input.classList.remove('popup__info_type_error');
 input.classList.remove('popup__info-error_active');
 formError.textContent = ''
 };

 const checkInputValidity = () => {
    if (!formInput.validity.valid) {
      // Передадим сообщение об ошибке вторым аргументом
      showError(formInput, formInput.validationMessage);
    } else {
      hideError(formInput);
    }
  };
 


 formElement.addEventListener('submit', function (evt) {
   evt.preventDefault();
 });

 formInput.addEventListener('input', function () {
    checkInputValidity();
    
  });
 

