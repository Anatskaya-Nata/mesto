import {
  openButtonEdit, 
  closeButtonEdit, 
  popupOverlay, 
  popupEdit, 
  formEditElement, 
  nameInput, 
  jobInput, 
  nameProfile, 
  jobProfile, 
  openButtonPlace, 
  popupPlace, 
  closeButtonPlace, 
  formPlaceElement, 
  openButtonImage, 
  closeButtonImage, 
  popupImage, 
 
  gallaryContainer, 
  gallaryTemplate, 
  placeInput, 
  linkInput, 
  
  initialCards,
  configValidate

} from './constants.js';

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

export function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeWithEscape);
}
 
function openPopupPlace(){
  openPopup(popupPlace)
  formPlaceElement.reset()
  placeFormValidator.disableSubmitButton();

  }
openButtonPlace.addEventListener('click',openPopupPlace);

function openEditPopup(){
  openPopup(popupEdit)
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
openButtonEdit.addEventListener('click', openEditPopup);

function closePopup(popup) {
  popup.classList.remove('popup_active');
  document.removeEventListener('keydown', closeWithEscape)
}

function closeEditPopup(){
  closePopup(popupEdit)
  }
closeButtonEdit.addEventListener('click', closeEditPopup);

function closePopupPlace() {
  closePopup(popupPlace)
}
closeButtonPlace.addEventListener("click",closePopupPlace);

function closePopupImage() {
  closePopup(popupImage)
}

closeButtonImage.addEventListener('click', closePopupImage )


function closeWithEscape(event) {
  const key = event.key; 
  if (key === "Escape") {
    const activePopup = document.querySelector('.popup_active')
    closePopup(activePopup)
  }
}

function closeWithEmptyPlace() {
  const popupList = Array.from(document.querySelectorAll('.popup'));
  popupList.forEach((elementOverlay)  => {
    elementOverlay.addEventListener('click',function(event) {
      
      if(event.target == elementOverlay ){
        closePopup(elementOverlay);
      }
    })
  })
}
closeWithEmptyPlace()


function handleEditFormSubmit (evt){
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closeEditPopup()
}
formEditElement.addEventListener('submit', handleEditFormSubmit);

function handleFormPlaceSubmit (evt) {
  evt.preventDefault();
  addUserCards(placeInput.value,linkInput.value)
  formPlaceElement.reset()
  placeFormValidator.disableSubmitButton();
  closePopupPlace()
}
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

function addUserCards() {
  const cardUserPlace = new Card(placeInput.value,linkInput.value,'.gallary__template')
  const cardUserPlaceElement = cardUserPlace.generateCard();
  gallaryContainer.prepend(cardUserPlaceElement);
}

function addInitCards() {
initialCards.forEach ((item) => {
  const cardInit = new Card(item.name,item.link,'.gallary__template');
  const cardInitElement = cardInit.generateCard();
  gallaryContainer.prepend(cardInitElement)

});   
}

addInitCards(Card)

 
const infoFormValidator  = new FormValidator(configValidate,
  document.querySelector('.popup__form_theme_edit'))
  infoFormValidator.enableValidation()

  
const placeFormValidator  = new FormValidator(configValidate,
  document.querySelector('.popup__form_theme_place'))
  placeFormValidator.enableValidation()

