import {formPlace} from './index.js'
class Popup{
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
    }
    open(){
       
        this._popup.classList.add('popup_active');
        this._handleEscClose = this._handleEscClose.bind(this)
        document.addEventListener('keydown', 
            this._handleEscClose, false
        );
            
    };
    close(){
        this._popup.classList.remove('popup_active')
        document.removeEventListener('keydown', 
            this._handleEscClose, false
        );
    }
    
    _handleEscClose(evt){
        const key = evt.key
        if (key === "Escape") {
            this.close( )
        }
    }
    setEventListeners(){
       
        const closeButton = this._popup.querySelector('.popup__close')
         closeButton.addEventListener("click",() => {
           
           this.close()
        });


            
    }    
}
export {Popup}

