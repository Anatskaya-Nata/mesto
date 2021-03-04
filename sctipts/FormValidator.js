import {submitButton,} from './constants.js';

 class FormValidator{
  
  
    constructor(configValidate,formElement) {

        this._formSelector = configValidate.formSelector
        this._inputSelector = configValidate.inputSelector
        this._submitButtonSelector = configValidate.submitButtonSelector
        this._inactiveButtonClass = configValidate.inactiveButtonClass
        this._inputErrorClass = configValidate.inputErrorClass
        this._errorClass = configValidate.errorClass
        this._formElement = formElement
        this._submitButton = submitButton;
    
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
    
        }
    };

    _setEventListeners(){
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
               
        this._toggleButtonState(inputList, this._submitButton);

        inputList.forEach(inputItem => {
            inputItem.addEventListener('input', () => {
               this._checkInputValidity(inputItem);
               this._toggleButtonState(inputList, this._submitButton);
            });
        });
 
    }

    _hasInvalidInput(inputList){
        return inputList.some((inputItem) => {
            return !inputItem.validity.valid;
        });
    }

    disableSubmitButton() {
        this._submitButton.setAttribute('disabled', true);
        this._submitButton.classList.add(this._inactiveButtonClass);
      }

    _toggleButtonState(inputList){
 
        if (this._hasInvalidInput(inputList)) {
            this.disableSubmitButton();
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        } 
    }
  
    enableValidation(){
        this._formElement.addEventListener('submit',(evt) =>{
            evt.preventDefault();
        })
        this._setEventListeners()   
    }


}



export {FormValidator}

  