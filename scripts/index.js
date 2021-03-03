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
  imagePopup, 
  textPopup, 
  gallaryContainer, 
  gallaryTemplate, 
  placeInput, 
  linkInput, 
  submitButton,

} from './constants.js';

import {initialCards,FormPlaceSubmit,Card,MainCardItem,newCard} from './Card.js';

import {config,FormValidator,infoFormValidator,placeFormValidator} from './FormValidator.js';


  function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeWithEscape);
}
 
function openPopupPlace(){
  openPopup(popupPlace)
  formPlaceElement.reset()

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
  const activePopup = document.querySelector('.popup_active')
  const key = event.key; 
  if (key === "Escape") {
    closePopup(activePopup)
  }
}

function closeWithEmptyPlace() {
  const formOverlay = Array.from(document.querySelectorAll('.popup'));
  formOverlay.forEach((elementOverlay)  => {
    elementOverlay.addEventListener('click',function(event) {
      
      if(event.target == elementOverlay ){
     
        elementOverlay.classList.remove('popup_active')
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

function handleFormPlaceSubmit (evt,config) { 
  evt.preventDefault(); 
 
 
  submitButton.setAttribute('disabled', true); 
  submitButton.classList.add('popup__button_inactive'); 
  closePopupPlace() 
} 
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);










