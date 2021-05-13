import {Popup} from './Popup.js'
import {placeFormValidator} from './index.js'


class PopupWithForm extends Popup {
    constructor(popupSelector,handleFormSubmit, openButtonSelector, handleFormOpen ) {
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this.form = this._popup.querySelector('.popup__form')
      
    }
        _getInputValues(){ 
        
        
        this._inputList = Array.from(this._popup.querySelectorAll('.popup__info')) 
        
        this._inputFormValues = {}; 
        this._inputList.forEach(input => this._inputFormValues[input.name] = input.value); 
        console.log(this._inputList) 
        
        return this._inputFormValues; 
    
        } 
    

    setEventListeners() {
        super.setEventListeners()
    
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        
            this._handleFormSubmit(this._getInputValues())
            this.close()
            placeFormValidator.disableSubmitButton()
            console.log(this._getInputValues)
        })

    }



    close () {
        super.close() 
        this.form.reset()
        
    }
        
}



export {PopupWithForm}

