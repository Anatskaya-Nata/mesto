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

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js'
import { PopupWithApproval } from '../components/PopupWithApproval'
import { Api } from '../components/Api'

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-24',
  token: 'cf1392bf-57d4-4bdf-840f-466cfe9d8ed2',
  groupID: 'cohort-24',
})

api.getCards()
  .then((cards) => {
    const sectionBlock = new Section({
      items: cards,
      renderer: (item, container) => {
        const card = new Card(item,
          '.gallary__template',
          function handleCardClick() {
            imagePopup.open(item)
          })
        const cardDomElement = card.generateCard()
        container.prepend(cardDomElement)
      }
    }, '.gallary__cards')
    sectionBlock.setDefaultItems()

  })


  .catch(e => console.log(`Ошибка при получении карточек: ${e}`))

const infoFormValidator = new FormValidator(configValidate,
  formEditElement
)
infoFormValidator.enableValidation()


export const placeFormValidator = new FormValidator(configValidate,
  formPlaceElement)
placeFormValidator.enableValidation()


export const imagePopup = new PopupWithImage('.popup_theme_image')
imagePopup.setEventListeners()

/*export const formPlace = new PopupWithForm (
  '.popup_theme_place',

    function handleSubmit(inputFormValues) {
      sectionBlock.addItem({name:inputFormValues.place, link:inputFormValues.link})
     }   
) */

/*export const formPlace = new PopupWithForm (
'.popup_theme_place',
function handleSubmit(inputFormValues) {
        api.setMyCard({name:inputFormValues.place, link:inputFormValues.link})
        console.log(inputFormValues)
            .then((res) =>{
              console.log(res)
             // sectionBlock.addItem(res)       
        })
        .catch(e => console.log(`Ошибка при отправке карточки: ${e}`))   
    }        
  ) */
const newUserValues = new UserInfo({ name: '.profile__name', about: '.profile__job', avatar: '.profile__photo' })

export const formEdit = new PopupWithForm(
  '.popup_theme_edit',
  function handleSubmit(inputFormValuesNew) {
    api.setUserData({ name: inputFormValuesNew.nick, about: inputFormValuesNew.about })

      .then((res) => {
        newUserValues.setUserInfo(res)
        console.log(res)
      })
      .catch(e => console.log(`Ошибка при отправке User данных: ${e}`))
  }

)

export const formPlace = new PopupWithForm(
  '.popup_theme_place',
  (inputFormValues) => {
    api.setMyCard({ name: inputFormValues.place, link: inputFormValues.link })

      .then((result) => {
        sectionBlock.addItem(result)
        console.log(result)
      })
      .catch(e => console.log(`Ошибка при отправке карточки: ${e}`))
  }

)



/* export const formEdit = new PopupWithForm ( 
   '.popup_theme_edit', 
   function handleSubmit(inputFormValuesNew){ 
     newUserValues.setUserInfo({name:inputFormValuesNew.nick, about:inputFormValuesNew.about}) 
   } 
 ) */






export const formApproval = new PopupWithApproval(
  '.popup_theme_approval',
  function handleSubmit() {
    console.log('123')
  }
)

//   const buttonOpenApproval =  document.querySelector('.gallary__delete')
//   buttonOpenApproval.addEventListener('click', () => {
//   formApproval.open()
//  })



buttonOpenPopupProfile.addEventListener('click', () => {
  formEdit.open()
  newUserValues.getUserInfo()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
})

buttonOpenPopupPlace.addEventListener('click', () => {
  placeFormValidator.disableSubmitButton()
  formPlace.open()
  //apiCards.open()
})



api.getUserData()
  .then((res) => {
    return newUserValues.setUserInfo(res)

  })

  .catch(e => console.log(`Ошибка при получении данных user: ${e}`))




formPlace.setEventListeners()
formEdit.setEventListeners()

formApproval.setEventListeners()




