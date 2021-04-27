import {Popup} from './Popup.js'
import {placeFormValidator} from './index.js'
import {formPlace} from './index.js'
import {UserInfo} from './UserInfo.js'

class PopupWithForm extends Popup {
    constructor(popupSelector,handleFormSubmit,openButtonSelector,handleFormOpen = function(){}){
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this._openButtonSelector = openButtonSelector
    }

    open(){
        super.open()
        //TODO: вызвать handleFormOpen

    }
 

_getInputValues(){
    
   
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__info'))
   
    this._inputFormValues = {};
    this._inputList.forEach(input => this._inputFormValues[input.name] = input.value);
      
    
      return this._inputFormValues;

}




setEventListeners(){
    super.setEventListeners()
   
    const submitForm = this._popup.querySelector('.popup__form')
   
    submitForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
       
        this._handleFormSubmit(this._getInputValues())
        this.close()
      
    })


    const openButton = document.querySelector( this._openButtonSelector)
    openButton.addEventListener('click', () => {
        this.open()
    })
    
}



close(){
    super.close() 
    placeFormValidator.disableSubmitButton();
    const popupForm =this._popup.querySelector('.popup__form')
    popupForm.reset()
    
}
    


}

export {PopupWithForm}

