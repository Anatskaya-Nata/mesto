//import '../pages/index.css'
import './index.css' 
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

} from '../components/constants.js';

import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import {Section} from '../components/Section.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {UserInfo} from '../components/UserInfo.js'
import {PopupWithApproval} from '../components/PopupWithApproval'
import {Api} from '../components/Api'

const api = new Api({
address: 'https://mesto.nomoreparties.co/v1/cohort-24',
token: 'cf1392bf-57d4-4bdf-840f-466cfe9d8ed2',
groupID: 'cohort-24',
})

 api. getCards()
 .then((cards) => {const sectionBlock = new Section ({
  //items: initialCards,
    items: cards ,
     renderer: (item,container) => {
     const card = new Card(item, 
             '.gallary__template',
             function handleCardClick(){
             imagePopup.open(item)       
           })     
       const cardDomElement = card.generateCard()
       container.prepend(cardDomElement)
       }
 },'.gallary__cards')
 sectionBlock.setDefaultItems()
  
})

.catch(e => console.log(`Ошибка при получении карточек: ${e}`))
//api.setUserData({name:',e', job: '.s'})

api.getUserData()


//api.setUserData({name:nameProfile.textContent,job: jobProfile.textContent})
api.setUserData({name:'Jacques Cousteau', job:'Sailor, researcher'})
.catch(e => console.log(`Ошибка при отправке данных user: ${e}`)) 
    
     


const infoFormValidator  = new FormValidator(configValidate,
  formEditElement
  )
  infoFormValidator.enableValidation()

  
  export const placeFormValidator  = new FormValidator(configValidate,
  formPlaceElement)
  placeFormValidator.enableValidation()


  export const imagePopup = new PopupWithImage ('.popup_theme_image')
  imagePopup.setEventListeners()

  export const formPlace = new PopupWithForm (
    '.popup_theme_place',

      function handleSubmit(inputFormValues) {
        sectionBlock.addItem({name:inputFormValues.place, link:inputFormValues.link})
       }   
  )   
    const newUserValues = new UserInfo({name:'.profile__name', job: '.profile__job'})
  

    export const formEdit = new PopupWithForm (
      '.popup_theme_edit',
      function handleSubmit(inputFormValuesNew){
        newUserValues.setUserInfo({name:inputFormValuesNew.nick, job:inputFormValuesNew.about})      
      }
    ) 


    const formApproval = new PopupWithApproval (
      '.popup_theme_approval',
      function handleSubmit(){
          console.log('123')
      }
    )


  /* const buttonOpenApproval =  document.querySelector('.gallary__delete')
   buttonOpenApproval.addEventListener('click', () => {
    formApproval.open()
   })*/


     
    buttonOpenPopupProfile.addEventListener('click', () => {
      formEdit.open()
      newUserValues. getUserInfo()
      nameInput.value = nameProfile.textContent;
      jobInput.value = jobProfile.textContent;
    }) 
    
    buttonOpenPopupPlace.addEventListener('click', () => {
      placeFormValidator.disableSubmitButton()
      formPlace.open()
      //apiCards.open()
    })



 formPlace.setEventListeners()
 formEdit.setEventListeners()

formApproval.setEventListeners()

   


