let openButtonEdit = document.querySelector('.profile__icon')
let openButtonNewPlace = document.querySelector('.profile__plus')
let popup = document.querySelector('.popup')

let popupEdit = document.querySelector('.popup.popup_theme_edit')
let popupNewPlace = document.querySelector('.popup.popup_theme_place')

let closeButtonEdit = document.querySelector('.popup__close_icon_edit')
let closeButtonNewPlace = document.querySelector('.popup__close_icon_place')

let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__info_input_name')
let jobInput = formElement.querySelector('.popup__info_input_job')

let placeInput = document.querySelector('.popup__info_input_place')
let linkInput = document.querySelector('.popup__info_input_link')

let nameProfile = document.querySelector('.profile__name')
let jobProfile = document.querySelector('.profile__job')




function popupOpen() {
   
    /*popup.classList.add('popup_active','popup_theme_edit')*/
  
}
openButtonEdit.addEventListener('click', function openEditPopup() {
    popupEdit.classList.add('popup_active')

    nameInput.value = nameProfile.textContent
    jobInput.value = jobProfile.textContent  
})

openButtonNewPlace.addEventListener('click',function openPlacePopup() {
    popupNewPlace.classList.add('popup_active')
    placeInput.value = placeInput.placeholder
    linkInput.value = linkInput.placeholder
})

function closePopupEdit() { 
 
    popupEdit.classList.remove('popup_active')
} 
closeButtonEdit.addEventListener('click', closePopupEdit) 




/*closeButtonEdit.addEventListener('click', function closePopupEdit(){
    popupEdit.classList.remove('popup_active')
 
})*/

closeButtonNewPlace.addEventListener('click', function closePopupPlace() {
    popupNewPlace.classList.remove('popup_active')

})

function handleFormSubmit (evt) {
    evt.preventDefault();


   nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopupEdit();
}

formElement.addEventListener('submit', handleFormSubmit);


