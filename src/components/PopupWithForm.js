import { Popup } from './Popup.js'

class PopupWithForm extends Popup {
	constructor(popupSelector, handleFormSubmit, submitButton) {
		super(popupSelector)
		this._handleFormSubmit = handleFormSubmit
		this.form = this._popup.querySelector('.popup__form')
		this.submitButton = this.form.querySelector('.popup__button')
		this._defaultSubmitText =
			this._popup.querySelector('.popup__button').textContent
	}
	_getInputValues() {
		this._inputList = Array.from(this._popup.querySelectorAll('.popup__info'))

		this._inputFormValues = {}
		this._inputList.forEach(
			(input) => (this._inputFormValues[input.name] = input.value)
		)

		return this._inputFormValues
	}

	waitButtonSubmit(isLoading) {
		if (isLoading) {
			this.submitButton.textContent = 'Coхранение.....'
		} else {
			this.submitButton.textContent = this._defaultSubmitText
		}
	}

	setEventListeners() {
		super.setEventListeners()
		this.form.addEventListener('submit', (evt) => {
			evt.preventDefault()

			this._handleFormSubmit(this._getInputValues())
			//this.close()
		})
	}

	close() {
		super.close()
		this.form.reset()
	}
}

export default PopupWithForm
