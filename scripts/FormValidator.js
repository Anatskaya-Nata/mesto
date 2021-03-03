 const config = {
    // CSS selectors
    formSelector: '.popup__form',
    inputSelector: '.popup__info',
    submitButtonSelector: '.popup__button',

    // Classes
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__info_type_error',
    errorClass: 'popup__info-error_active'
}

 class FormValidator{
  
  
    constructor(config,selector) {

        this._formSelector = config.formSelector
        this._inputSelector = config.inputSelector
        this._submitButtonSelector = config.submitButtonSelector
        this._inactiveButtonClass = config.inactiveButtonClass
        this._inputErrorClass = config.inputErrorClass
        this._errorClass = config.errorClass

        //this._config = config
        //this._config.errorClass

      this._formElement = document.querySelector(selector)
    
    }
    
    _showError(inputItem,errorMessage){
        const errorItem = this._formElement.querySelector(`.${inputItem.id}-error`);
        console.log(errorItem)
        inputItem.classList.add(this._inputErrorClass);
        errorItem.textContent = errorMessage;
        errorItem.classList.add(this._errorClass)
    }

    _hideError(inputItem){
        const errorItem =  this._formElement.querySelector(`.${inputItem.id}-error`);  
        inputItem.classList.remove(this._inputErrorClass);
        errorItem.classList.remove(this._errorClass);
        errorItem.textContent = ''
    }

    _checkInputValidity(inputItem){
        if (!inputItem.validity.valid) {
            this._showError(inputItem,inputItem.validationMessage)
        } else {
           this._hideError(inputItem)
           console.log(123)
        }
    };

    _setEventListeners(){
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector('.popup__button');
        
        this._toggleButtonState(inputList, buttonElement);

        inputList.forEach(inputItem => {
            inputItem.addEventListener('input', () => {
               this._checkInputValidity(inputItem);
               this._toggleButtonState(inputList, buttonElement);
            });
        });
 
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputItem) => {
            return !inputItem.validity.valid;
        });
    }

    _toggleButtonState(inputList,buttonElement){
 
        if (this._hasInvalidInput(inputList)) {
            buttonElement.setAttribute('disabled', true);
            buttonElement.classList.add(this._inactiveButtonClass)
        } else {
            buttonElement.classList.remove(this._inactiveButtonClass);
            buttonElement.removeAttribute('disabled');
        } 
    }
  
    enableValidation(){
        this._formElement.addEventListener('submit',(evt) =>{
            evt.preventDefault();
        })
        this._setEventListeners()   
    }


}


     const infoFormValidator  = new FormValidator(config,
    '.popup__form_theme_edit')
        infoFormValidator.enableValidation()

    
     const placeFormValidator  = new FormValidator(config,
    '.popup__form_theme_place')
        placeFormValidator.enableValidation()

export {config,FormValidator,infoFormValidator,placeFormValidator}




 









