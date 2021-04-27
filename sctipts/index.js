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
  configValidate,
  newUserForm

} from './constants.js';

import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Section} from './Section.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js';
import {UserInfo} from './UserInfo.js'




/*function closeWithEmptyPlace() {
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
 // addUserCards(placeInput.value,linkInput.value);

 sectionBlock.addItem({name:placeInput.value, link:linkInput.value})
  formPlaceElement.reset()
  placeFormValidator.disableSubmitButton();
  closePopupPlace()
}
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);*/



 


 
const infoFormValidator  = new FormValidator(configValidate,
  document.querySelector('.popup__form_theme_edit'))
  infoFormValidator.enableValidation()

  
  export const placeFormValidator  = new FormValidator(configValidate,
  document.querySelector('.popup__form_theme_place'))
  placeFormValidator.enableValidation()




  const sectionBlock = new Section ({
    items: initialCards,
    renderer: (item,container) => {
      const card = new Card(item.name, item.link,'.gallary__template');
      const cardDomElement = card.generateCard()
      container.prepend(cardDomElement)
    }
  },'.gallary__cards')

    sectionBlock.setDefaultItems();




 export const imagePopup = new PopupWithImage ('.popup_theme_image')
        imagePopup.setEventListeners()


 
/*const formPlace = new PopupWithForm ({
 popupSelector:'.popup__form_theme_place',

  handleFormSubmit:() => {
    sectionBlock.addItem({name:placeInput.value, link:linkInput.value})
  }*/

  export const formPlace = new PopupWithForm (
    '.popup_theme_place',
    function handleSubmit(inputFormValues) {
      sectionBlock.addItem({name:inputFormValues.place, link:inputFormValues.link})
      console.log(inputFormValues)
    }, 
    '.profile__plus' )

  
/*export const formEdit = new PopupWithForm (
    '.popup_theme_edit',
    function (inputFormValues) {
        const userName = document.querySelector('.profile__name')
        userName.textContent = inputFormValues['user-name']
        const userJob = document.querySelector('.profile__job')
        userJob.textContent = inputFormValues['user-job']
    }, 
   '.profile__icon',
   function () {
    //TODO:функция при открытии подставляет данные пользователя
const addingUserValues = new UserInfo(

)
   }
    )*/

    export const formEdit = new PopupWithForm (
      '.popup_theme_edit',
 
      function handleSubmit () {
      const newValues = new UserInfo(userForm)
      newValues.setUserInfo()
      console.log(newValues)
      },
     
      '.profile__icon'
    )
    
  




//formPlace.open()
 formPlace.setEventListeners()
formEdit.setEventListeners()
console.log(formEdit)