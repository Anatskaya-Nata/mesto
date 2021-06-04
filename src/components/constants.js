const buttonOpenPopupProfile = document.querySelector('.profile__icon')
const buttonClosePopupProfile = document.querySelector(
	'.popup__close_icon_edit'
)
const popupOverlay = document.querySelector('.popup')
const popupEdit = document.querySelector('.popup.popup_theme_edit')
const formEditElement = document.querySelector('.popup__form_theme_edit')
const nameInput = formEditElement.querySelector('.popup__info_input_name')
const jobInput = formEditElement.querySelector('.popup__info_input_job')
const nameProfile = document.querySelector('.profile__name')
const jobProfile = document.querySelector('.profile__job')
const buttonOpenPopupPlace = document.querySelector('.profile__plus')
const popupPlace = document.querySelector('.popup.popup_theme_place')
const buttonClosePopupPlace = document.querySelector('.popup__close_icon_place')
const formPlaceElement = document.querySelector('.popup__form_theme_place')
const buttonOpenPopupImage = document.querySelector('.gallary__item')
const buttonClosePopupImage = document.querySelector('.popup__close_icon_image')
const popupImage = document.querySelector('.popup_theme_image')
const imagePopup = document.querySelector('.popup__image')
const textPopup = document.querySelector('.popup__text')
const gallaryContainer = document.querySelector('.gallary__cards')
const gallaryTemplate = document.querySelector('.gallary__template').content
const placeInput = document.querySelector('.popup__info_input_place')
const linkInput = document.querySelector('.popup__info_input_link')
const buttonSubmitPlace = document.querySelector('.popup__button_place')
const buttonOpenPopupAvatar = document.querySelector('.profile__photo')
const avatarInput = document.querySelector('.popup__info_input_avatar')
const buttonSubmitAvatar = document.querySelector('.popup__button_avatar')
const buttonSubmitEdit = document.querySelector('popup__button_edit')

const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
	},
]

const configValidate = {
	// CSS selectors
	formSelector: '.popup__form',
	inputSelector: '.popup__info',
	submitButtonSelector: '.popup__button',

	// Classes
	inactiveButtonClass: 'popup__button_inactive',
	inputErrorClass: 'popup__info_type_error',
	errorClass: 'popup__info-error_active',
}

const newUserForm = {
	nameSelector: '.popup__info_input_name',
	jobSelector: '.popup__info_input_job',
}

export {
	buttonOpenPopupProfile,
	buttonClosePopupProfile,
	popupOverlay,
	popupEdit,
	formEditElement,
	nameInput,
	jobInput,
	nameProfile,
	jobProfile,
	buttonOpenPopupPlace,
	popupPlace,
	buttonClosePopupPlace,
	formPlaceElement,
	buttonOpenPopupImage,
	buttonClosePopupImage,
	popupImage,
	imagePopup,
	textPopup,
	gallaryContainer,
	gallaryTemplate,
	placeInput,
	linkInput,
	buttonSubmitPlace,
	initialCards,
	configValidate,
	newUserForm,
	buttonOpenPopupAvatar,
	avatarInput,
	buttonSubmitAvatar,
	buttonSubmitEdit,
}
