
const openButtonEdit = document.querySelector('.profile__icon')
const closeButtonEdit = document.querySelector('.popup__close_icon_edit')
const popupOverlay = document.querySelector('.popup')
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

function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeWithEscape);
}
 
function openPopupPlace(){
  openPopup(popupPlace)
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



 /* const formOverlay = Array.from(document.querySelectorAll('.popup'));
  formOverlay.forEach((elementOverlay)  => {
    elementOverlay.addEventListener('click',function(event) {
      console.log(event.target)
      if(event.target == elementOverlay ){
        console.log(elementOverlay)
        elementOverlay.classList.remove('popup_active')
      }
  })



  
})*/

function closeWithEscape(event) {
  const key = event.key; 
  if (key === "Escape") {
    closePopup(popupImage)
    closePopup(popupPlace)
    closePopup(popupEdit)
  }
}


function closeWithEmptyPlace() {
  const formOverlay = Array.from(document.querySelectorAll('.popup'));
  formOverlay.forEach((elementOverlay)  => {
    elementOverlay.addEventListener('click',function(event) {
      /*console.log(event.target)*/
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

function handleFormPlaceSubmit (evt) {
  evt.preventDefault();
  addCards(placeInput.value,linkInput.value)

  placeInput.value = '';
  linkInput.value = '';
  closePopupPlace()
}
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);



 function createCard(elementName,elementLink) {
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
openPopup(popupImage)
    
     imagePopup.src = elementLink
     textPopup.textContent = elementName
    
    })
    return galleryMainCard
    /*gallaryContainer.prepend(galleryMainCard);*/

}
function addingToDom(params) {
  const MainCard = createCard(elementName,elementLink)
  console.log (MainCard)
  gallaryContainer.prepend(MainCard);
}

function render() {
  initialCards.forEach(renderCard)
  
}

function renderCard(item) {
  const newCard = createCard(item.name,item.link)
gallaryContainer.prepend(newCard); 
}


  
function addCards() {
  const newCard = createCard(placeInput.value,linkInput.value)
  gallaryContainer.prepend(newCard);
}
  
 render()

 

  