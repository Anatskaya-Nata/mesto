const openButtonEdit = document.querySelector('.profile__icon')
const closeButtonEdit = document.querySelector('.popup__close_icon_edit')
const popupEdit = document.querySelector('.popup.popup_theme_edit')
const formEditElement = document.querySelector('.popup__form_theme_edit')
const nameInput = formEditElement.querySelector('.popup__info_input_name')
const jobInput = formEditElement.querySelector('.popup__info_input_job')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__job')



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

const openButtonPlace = document.querySelector('.profile__plus')
const popupPlace = document.querySelector('.popup.popup_theme_place')
const closeButtonPlace = document.querySelector('.popup__close_icon_place')
const formPlaceElement = document.querySelector('.popup__form_theme_place')

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
  addCards(placeInput.value,linkInput.value);
  placeInput.value = '';
  linkInput.value = '';
  closePopupPlace()
}
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);


const gallaryContainer = document.querySelector('.gallary__cards');

const gallaryTemplate = document.querySelector('.gallary__template').content;
const galleryCloneElement = gallaryTemplate.cloneNode(true);
const placeInput = document.querySelector('.popup__info_input_place');
const linkInput = document.querySelector('.popup__info_input_link');


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
console.log(initialCards)

    initialCards.forEach(function(element) {
      const galleryCloneElement = gallaryTemplate.cloneNode(true);

      galleryCloneElement.querySelector('.gallary__text').textContent = element.name;
      galleryCloneElement.querySelector('.gallary__item').src = element.link;
      galleryCloneElement.querySelector('.gallary__icon').addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallary__icon_active');
       
      })
        gallaryContainer.append(galleryCloneElement);
    })

    function addCards(PlaceValue, LinkValue) {
      const cardElement = gallaryTemplate.cloneNode(true);
      const placeInput = document.querySelector('.popup__info_input_place');
      const linkInput = document.querySelector('.popup__info_input_link');

      cardElement.querySelector('.gallary__item').src = linkInput.value;
      cardElement.querySelector('.gallary__text').textContent = placeInput.value;
     
      cardElement.querySelector('.gallary__icon').addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallary__icon_active');
       
      })
      gallaryContainer.prepend(cardElement)
    }




      


    




