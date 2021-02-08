
function openPopup(popup) {
  popup.classList.add('popup_active');
  document.addEventListener('keydown', closeWithEscape);
}
 
function openPopupPlace(){
  openPopup(popupPlace)
  formPlaceElement.reset()

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


function closeWithEscape(event) {
  const activePopup = document.querySelector('.popup_active')
  const key = event.key; 
  if (key === "Escape") {
    closePopup(activePopup)
  }
}

function closeWithEmptyPlace() {
  const formOverlay = Array.from(document.querySelectorAll('.popup'));
  formOverlay.forEach((elementOverlay)  => {
    elementOverlay.addEventListener('click',function(event) {
      
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

function handleFormPlaceSubmit (evt,config) {
  evt.preventDefault();
  addCards(placeInput.value,linkInput.value)
  formPlaceElement.reset()
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add('popup__button_inactive');
  closePopupPlace()
}
formPlaceElement.addEventListener('submit', handleFormPlaceSubmit);

 function createCard(elementName,elementLink) {
  const galleryMainCard = gallaryTemplate.cloneNode(true);

  galleryMainCard.querySelector('.gallary__text').textContent = elementName;
 
  galleryMainCard.querySelector('.gallary__item').src = elementLink;

  galleryMainCard.querySelector('.gallary__icon').addEventListener('click',handleLikeIcon) 
     
  galleryMainCard.querySelector('.gallary__delete').addEventListener('click',handleDeleteCard)       
    
  galleryMainCard.querySelector('.gallary__item').addEventListener('click', () => handlePreviewPicture (elementName,elementLink));
    
  return galleryMainCard
    
}

const handlePreviewPicture = (elementName,elementLink) => {
  openPopup(popupImage)
  imagePopup.src = elementLink
  textPopup.textContent = elementName

  };

const handleDeleteCard = (evt) => {
  evt.target.closest('.gallary__card').remove()
  };

const handleLikeIcon = (evt) => {
  evt.target.classList.toggle('gallary__icon_active');
    };



function addingToDom() {
  const MainCard = createCard(elementName,elementLink)
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

 

  