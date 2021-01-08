let openButton = document.querySelector('.profile__icon')
let overlay = document.querySelector('.overlay')
let closeButton = overlay.querySelector('.popup__close-icon')


/*openButton.addEventListener('click',() => {
    overlay.classList.toggle('overlay_active')
})

closeButton.addEventListener('click',() => {
      overlay.classList.toggle('overlay_active')
})*/
function toddlePopup (){
    overlay.classList.toggle('overlay_active')
}
openButton.addEventListener('click', toddlePopup)
closeButton.addEventListener('click', toddlePopup)

let formElement = document.querySelector('.popup')


function handleFormSubmit (evt) {
    evt.preventDefault(); 

    let nameInput = formElement.querySelector('.popup__input-name')// Воспользуйтесь инструментом .querySelector()
    let jobInput = formElement.querySelector('.popup__input-info')// Воспользуйтесь инструментом .querySelector()
 
      // Получите значение полей из свойства value
    nameInput.getAttribute('value');
    jobInput.getAttribute('value');

let nameProfile = document.querySelector('.profile__name')
let jobProfile = document.querySelector('.profile__info')

    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);
