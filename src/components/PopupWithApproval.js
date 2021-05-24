import {Popup} from './Popup.js'
class PopupWithApproval extends Popup {
    constructor(popupSelector,handleFormSubmit){
        super(popupSelector)
        this._handleFormSubmit = handleFormSubmit
        this.form = this._popup.querySelector('.popup__form')
    }

   

    setEventListeners(){
        super.setEventListeners()
       
        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit()
    })
}
}


export {PopupWithApproval}