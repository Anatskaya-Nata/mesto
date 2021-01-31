
const openButtonEdit = document.querySelector('.profile__icon')
const closeButtonEdit = document.querySelector('.popup__close_icon_edit')
const popupEdit = document.querySelector('.popup.popup_theme_edit')
const formEditElement = document.querySelector('.popup__form_theme_edit')
const nameInput = formEditElement.querySelector('.popup__info_input_name')
const jobInput = formEditElement.querySelector('.popup__info_input_job')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__job')
const openButtonPlace = document.querySelector('.profile__plus')
const popupPlace = document.querySelector('.popup.popup_theme_place')
const closeButtonPlace = document.querySelector('.popup__close_icon_place')
const formPlaceElement = document.querySelector('.popup__form_theme_place')
const openButtonImage = document.querySelector('.gallary__item')
const closeButtonImage = document.querySelector('.popup__close_icon_image')
const popupImage = document.querySelector('.popup_theme_image')
const imagePopup = document.querySelector('.popup__image')
const textPopup = document.querySelector('.popup__text')
const gallaryContainer = document.querySelector('.gallary__cards');
const gallaryTemplate = document.querySelector('.gallary__template').content;

const placeInput = document.querySelector('.popup__info_input_place');
const linkInput = document.querySelector('.popup__info_input_link');
 
function openEditPopup(){
    popupEdit.classList.add('popup_active')
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
}
openButtonEdit.addEventListener('click',  openEditPopup);

function closeEditPopup(){
    popupEdit.classList.remove('popup_active');
}
closeButtonEdit.addEventListener('click',  closeEditPopup);

function handleEditFormSubmit (evt){
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closeEditPopup()
}
formEditElement.addEventListener('submit', handleEditFormSubmit);

function openPopupPlace(){
  popupPlace.classList.add('popup_active');
}
openButtonPlace.addEventListener('click',openPopupPlace);

function closePopupPlace() {
  popupPlace.classList.remove('popup_active');
}
closeButtonPlace.addEventListener("click",closePopupPlace);

function handleFormPlaceSubmit (evt) {
  evt.preventDefault();
  addCards(placeInput.value,linkInput.value)

  placeInput.value = '';
  linkInput.value = '';
  closePopupPlace()
}
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);
function closeImagePopup(){
  popupImage.classList.remove('popup_active');
}
closeButtonImage.addEventListener('click',  closeImagePopup)

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


 function card(elementName,elementLink) {
  const galleryMainCard = gallaryTemplate.cloneNode(true);
 
  galleryMainCard.querySelector('.gallary__text').textContent = elementName;
 
  galleryMainCard.querySelector('.gallary__item').src = elementLink;

  galleryMainCard.querySelector('.gallary__icon').addEventListener('click', function (evt) {
      evt.target.classList.toggle('gallary__icon_active');
    })
  galleryMainCard.querySelector('.gallary__delete').addEventListener('click',function (evt){
      evt.target.closest('.gallary__card').remove()
    })
   galleryMainCard.querySelector('.gallary__item').addEventListener('click', function (evt){
      popupImage.classList.add('popup_active')
    
     imagePopup.src = elementLink
     textPopup.textContent = elementName
    
    })

    gallaryContainer.prepend(galleryMainCard); 

}

function render() {
  initialCards.forEach(renderCard  )
  
}

  function renderCard(list) {
    const galleryCloneElement = gallaryTemplate.cloneNode(true);
    galleryCloneElement.querySelector('.gallary__text').textContent = list.name;
    galleryCloneElement.querySelector('.gallary__item').src = list.link;

    card(list.name,list.link)

  }

  
  function addCards() {
    const cardElement = gallaryTemplate.cloneNode(true);
    const placeInput = document.querySelector('.popup__info_input_place');
    const linkInput = document.querySelector('.popup__info_input_link');

    cardElement.querySelector('.gallary__item').src = linkInput.value;
    cardElement.querySelector('.gallary__text').textContent = placeInput.value;
    card(placeInput.value,linkInput.value)
   /*gallaryContainer.prepend(cardElement)*/
  }
  
 render()

 

  