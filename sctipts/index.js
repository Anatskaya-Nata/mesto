let openButton = document.querySelector('.profile__icon')
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-icon')


function popupOpen() {
   
    popup.classList.add('popup_active')
    nameProfile.textContent = nameInput.value;  
}
openButton.addEventListener('click', popupOpen)

function popupClose() {

    popup.classList.remove('popup_active')  
}
closeButton.addEventListener('click', popupClose)

let formElement = document.querySelector('.popup__form')

let nameInput = formElement.querySelector('.popup__info_input_name')
let jobInput = formElement.querySelector('.popup__info_input_job')

let nameProfile = document.querySelector('.profile__name')
let jobProfile = document.querySelector('.profile__job')


function sendValueInInput(){

    nameInput.value = nameProfile.innerText
    jobInput.value = jobProfile.innerText

}
sendValueInInput()


function handleFormSubmit (evt) {
    evt.preventDefault();


   nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    popupClose()
}
formElement.addEventListener('submit', handleFormSubmit);

