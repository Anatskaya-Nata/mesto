

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


function closeWithEscape(event) {
  const activePopup = document.querySelector('.popup_active')
  const key = event.key; 
  if (key === "Escape") {
   /* closePopup(popupImage)
    closePopup(popupPlace)
    closePopup(popupEdit)*/
    closePopup(activePopup)
  }
}


function closeWithEmptyPlace() {
  const formOverlay = Array.from(document.querySelectorAll('.popup'));
  formOverlay.forEach((elementOverlay)  => {
    elementOverlay.addEventListener('click',function(event) {
     /* console.log(event.target)*/
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
  formPlaceElement.reset();
  /*placeInput.value = '';
  linkInput.value = '';*/
  toggleButtonState(inputList, buttonElement)
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
    
     imagePopup.src =  elementLink
     textPopup.textContent = elementName
     render()
    
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

 

  