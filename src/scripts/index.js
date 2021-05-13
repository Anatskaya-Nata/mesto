import '../style/index.css' 
import '../index.html'

import {
  buttonOpenPopupProfile, 
 buttonClosePopupProfile, 
  popupOverlay, 
  popupEdit, 
  formEditElement, 
  nameInput, 
  jobInput, 
  nameProfile, 
  jobProfile, 
  buttonOpenPopupPlace, 
  popupPlace, 
  buttonClosePopupPlace, 
  formPlaceElement, 
  buttonOpenPopupImage, 
  buttonClosePopupImage, 
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
  formEditElement
  )
  infoFormValidator.enableValidation()

  
  export const placeFormValidator  = new FormValidator(configValidate,
  formPlaceElement)
  placeFormValidator.enableValidation()


  export const imagePopup = new PopupWithImage ('.popup_theme_image')
  imagePopup.setEventListeners()

  const sectionBlock = new Section ({
      items: initialCards,
      renderer: (item,container) => {
      const card = new Card(item, 
        
          '.gallary__template',
            function handleCardClick(){
              imagePopup.open(item)
         
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
     
      }, 

      buttonOpenPopupPlace.addEventListener('click', () => {
      formPlace.open()
    })
  )   
    const newUserValues = new UserInfo({name:'.profile__name', job: '.profile__job'})
 

    export const formEdit = new PopupWithForm (
      '.popup_theme_edit',
      function handleSubmit(inputFormValuesNew){
        newUserValues.setUserInfo({name:inputFormValuesNew.nick, job:inputFormValuesNew.about})
      }
    ) 
     
    buttonOpenPopupProfile.addEventListener('click', () => {
      formEdit.open()
      newUserValues. getUserInfo()
      nameInput.value = nameProfile.textContent;
      jobInput.value = jobProfile.textContent;
    }) 

 formPlace.setEventListeners()
 formEdit.setEventListeners()


   


