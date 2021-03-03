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




const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
 
 class FormPlaceSubmit {

    constructor(selector, onSubmit) {
       this._сontainer = document.querySelector(selector)
        this._onSubmit = onSubmit
    }
    _submit = event => {
        event.preventDefault();
         const inputs = document.querySelector('.popup__form_theme_place')
         console.log(inputs)
         this._onSubmit(placeInput.value,linkInput.value)
     
         //submitButton.setAttribute('disabled', true);
        // submitButton.classList.add('popup__button_inactive');
         //closePopupPlace()
         
        inputs.reset()
    }
    init = () => {
        this._сontainer.addEventListener('submit', this._submit);
    }
}

 class Card{
    constructor(name,link,template) {
        this._name = name;
        this._link = link;
        this._template = template

    }

    generateCard = () => {
        this._item = this._template.cloneNode(true)
        
        
        this._item.querySelector('.gallary__text').textContent = this._name;
        this._item.querySelector('.gallary__item').src = this._link;
    
        this._setEventListeners()
         return this._item;
    }

    _setEventListeners() {
        this._item.querySelector('.gallary__icon').addEventListener('click',(evt) => {
            this._handleLikeIcon(evt)
        }) 
        this._item.querySelector('.gallary__delete').addEventListener('click',(evt) => {
            this._handleDeleteCard(evt)
        }) 
        this._item.querySelector('.gallary__item').addEventListener('click',() => {
          
            this._handlePreviewPicture()
        }) 
    }

    
    _handleLikeIcon (evt) {
        evt.target.classList.toggle('gallary__icon_active')  
    }
    _handleDeleteCard (evt){
        evt.target.closest('.gallary__card').remove() 
       
    }
    _handlePreviewPicture () {
      //openPopup(popupImage)
        popupImage.classList.add('popup_active')
        imagePopup.src =this._link
        textPopup.textContent = this._name
    }
}

 class MainCardItem{

    constructor(selector, itemTemplate) {
        this._container = document.querySelector(selector);
        this.itemTemplate = itemTemplate
        this._form = new FormPlaceSubmit('.popup__form_theme_place', this.addToMainCard)
        this._form.init()
    }
    addToMainCard = (name,link) => {
        const cardItem = new Card(name,link,this.itemTemplate)
        const generateElement = cardItem.generateCard();
        this._container.prepend(generateElement)
    }
}
function newCard() {
    const mainCardItem = new MainCardItem('.gallary__cards',
    document.querySelector('.gallary__template').content)
    
    initialCards.forEach((item) => {
        mainCardItem.addToMainCard(item.name,item.link)


        })  
}
newCard()



export {initialCards,FormPlaceSubmit,Card,MainCardItem,newCard}