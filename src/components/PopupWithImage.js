
import {Popup} from './Popup.js'

class PopupWithImage extends Popup {
 open(data){
    super.open();
    this._popup.querySelector('.popup__image').src = data.link
    this._popup.querySelector('.popup__text').textContent = data.name
    }  
}


export default PopupWithImage