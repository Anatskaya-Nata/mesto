class UserInfo {
	constructor({
		name: userNamesSelector,
		about: userJobSelector,

		avatar: userAvatarSelector,
	}) {
		this._name = document.querySelector(userNamesSelector)
		this._about = document.querySelector(userJobSelector)
		this._avatar = document.querySelector(userAvatarSelector)
	}

	getUserInfo() {
		return {
			name: this._name.textContent,
			job: this._about.textContent,
			avatar: this._avatar.src,
		}
	}

	setUserInfo({ name, about, avatar }) {
		this._name.textContent = name
		this._about.textContent = about
		this._avatar.src = avatar
	}
}

export default UserInfo
