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
  buttonOpenPopupAvatar,
  gallaryContainer,
  gallaryTemplate,
  placeInput,
  linkInput,
  avatarInput,
  buttonSubmitAvatar,
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



const formApproval = new PopupWithApproval('.popup_theme_approval',);
formApproval.setEventListeners()



//удаление карточки
function deleteClickHandler(card) {

  function deleteMyCard()  {
    api.deleteCard(card._cardId)
 
      .then(res => {
        card.handleDeleteCard()
      },
      formApproval.close()
      )
      .catch(e => console.log(`Ошибка при удалении карточки: ${e}`))
  }
  formApproval.setNewSubmitHandler(deleteMyCard)
  formApproval.open()

}


function likeClickHandler(card) {
  if(card.isLiked) {
    api.deleteLike(card._cardId)
      .then(res => {
        card.setLikesInfo(res)
      })
  } else {
    api.setLike(card._cardId)
      .then((res) => {
        card.setLikesInfo(res)
      })
  }
}


api.getFullPageInfo()
  .then(([cards, userData]) => {
    console.log('cards', cards)
    const currentUserId = userData._id // наш id
    newUserValues.setUserInfo(userData)

    function handleCardClick() {
      imagePopup.open(item)
    }

    const sectionBlock = new Section({
      items: cards,
      renderer: (item, container) => {
        const card = new Card(item,
          currentUserId,
          '.gallary__template',
          handleCardClick,
          deleteClickHandler,
          likeClickHandler
          )
        const cardDomElement = card.generateCard()
        container.prepend(cardDomElement)
      }
    }, '.gallary__cards')
    sectionBlock.setDefaultItems()


    const formPlace = new PopupWithForm(
      '.popup_theme_place',
      (inputFormValues) => {
        api.setMyCard({ name: inputFormValues.place, link: inputFormValues.link })
    
          .then((result) => {
            sectionBlock.addItem(result)
            console.log(result)
          })
          .catch(e => console.log(`Ошибка при отправке карточки: ${e}`)),
          formEdit.waitButtonSubmit()
      }
    )
    formPlace.setEventListeners()

    buttonOpenPopupPlace.addEventListener('click', () => {
      placeFormValidator.disableSubmitButton()
      formPlace.open()
    })
  })
  .catch(e => console.log(`Ошибка при получении данных user: ${e}`))


const infoFormValidator = new FormValidator(configValidate,
  formEditElement
)
infoFormValidator.enableValidation()


export const placeFormValidator = new FormValidator(configValidate,
  formPlaceElement)
placeFormValidator.enableValidation()


 const imagePopup = new PopupWithImage('.popup_theme_image')
imagePopup.setEventListeners()


const newUserValues = new UserInfo({ name: '.profile__name', about: '.profile__job', avatar: '.profile__photo' })

 const formEdit = new PopupWithForm(
  '.popup_theme_edit',
  function handleSubmit(inputFormValuesNew) {
    api.setUserData({ name: inputFormValuesNew.nick, about: inputFormValuesNew.about })

      .then((res) => {
        newUserValues.setUserInfo(res)
        console.log(res)
      })
      .catch(e => console.log(`Ошибка при отправке User данных: ${e}`)),
      formEdit.waitButtonSubmit()
  } )

buttonOpenPopupProfile.addEventListener('click', () => {
  formEdit.open()
  newUserValues.getUserInfo()
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
})



  const formAvatar = new PopupWithForm(
    '.popup_theme_avatar',
     function handleSubmit(newUserValues) {
     
      api.setUserAvatar(newUserValues)

        .then((res) => {
        
          console.log(res)
        })
        .catch(e => console.log(`Ошибка при отправке автара: ${e}`))

        buttonOpenPopupAvatar.src = avatarInput.value,
    
        formAvatar.waitButtonSubmit(newUserValues)
      })


formAvatar.setEventListeners()

buttonOpenPopupAvatar.addEventListener('click', () => {
  formAvatar.open()
  
})








formEdit.setEventListeners()




