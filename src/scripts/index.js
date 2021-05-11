import '../style/index.css'
import '../index.html'


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


 
const infoFormValidator  = new FormValidator(configValidate,
  document.querySelector('.popup__form_theme_edit'))
  infoFormValidator.enableValidation()

  
  export const placeFormValidator  = new FormValidator(configValidate,
  document.querySelector('.popup__form_theme_place'))
  placeFormValidator.enableValidation()


  export const imagePopup = new PopupWithImage ('.popup_theme_image')
  imagePopup.setEventListeners()

  const sectionBlock = new Section ({
      items: initialCards,
      renderer: (item,container) => {
      const card = new Card(item.name, 
          item.link,
          '.gallary__template',
            function handleCardClick(){
              imagePopup.open(item.link,item.name)
            }
      )      
      const cardDomElement = card.generateCard()
      container.prepend(cardDomElement)
    }
  },'.gallary__cards')

    sectionBlock.setDefaultItems();

  export const formPlace = new PopupWithForm (
    '.popup_theme_place',
    function handleSubmit(inputFormValues) {
      sectionBlock.addItem({name:inputFormValues.place, link:inputFormValues.link})
      console.log(inputFormValues)
    }, 
    '.profile__plus' )

     
    export const formEdit = new PopupWithForm (
      '.popup_theme_edit',
      function handleSubmit(inputFormValuesNew) { 
        const newUserValues = new UserInfo({name:inputFormValuesNew.nick, job:inputFormValuesNew.about},
        '.profile__name',
        '.profile__job')
        
           newUserValues.setUserInfo()
      },
     '.profile__icon',
      function handleFormOpen()  {
        nameInput.value = nameProfile.textContent;
        jobInput.value = jobProfile.textContent;
 
      },
         
    )

 formPlace.setEventListeners()
 formEdit.setEventListeners()
console.log(formPlace)

   


