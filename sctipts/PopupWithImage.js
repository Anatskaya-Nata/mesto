import { imagePopup, textPopup} from './constants.js';
import {Popup} from './Popup.js'

class PopupWithImage extends Popup {
 open(link,name){
    super.open();
    imagePopup.src = link
    textPopup.textContent = name
    }  
}

export{PopupWithImage}