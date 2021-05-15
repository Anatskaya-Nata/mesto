
class Popup{
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector)
        this._handleEscClose = this._handleEscClose.bind(this)

    }
    open(){
       
        this._popup.classList.add('popup_active');
            document.addEventListener('keydown', 
            this._handleEscClose, false
        );
            
    };
    close () {
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

        this._popup.addEventListener('click', event => {
        
                if(event.target ===  event.currentTarget ||
                    event.target === closeButton) {
                this.close()
                
                } 
      
            })
    }    
}
export {Popup}

