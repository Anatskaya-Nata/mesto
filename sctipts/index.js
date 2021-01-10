let openButton = document.querySelector('.profile__icon')
let popup = document.querySelector('.popup')
let closeButton = popup.querySelector('.popup__close-icon')


function popupOpen() {
   
    popup.classList.add('popup_active')  
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

let saveButtom = document.querySelector('.popup__button')

function handleFormSubmit (evt) {
    evt.preventDefault();


  let inputs = document.querySelectorAll('input')
    console.log(inputs[0].value); 
    console.log(inputs[1].value); 
 


    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;

}
formElement.addEventListener('submit', handleFormSubmit);
saveButtom.addEventListener('click', popupClose);
