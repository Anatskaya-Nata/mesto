class Api {
  constructor({ address, token, groupID }) {
    this._address = address;
    this._token = token;
    this._groupID = groupID
  }

  getFullPageInfo() {
    return Promise.all([this.getCards(), this.getUserData()])
  }

  getCards() {

    return fetch(`${this._address}/cards`, {
      headers: {
        authorization: this._token,
      },

    })
      .then((res) => {
        return res.json();
      })
      /*.then((data) => {
          console.log(data); // если мы попали в этот then, data — это объект
     })*/
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })

  }
  getUserData() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
      }
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })
  }

  setUserData(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about,
        avatar: data.avatar
      })
    })
      .then((res) => {
        return res.json();
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })


  }

  setLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.log('Ошибка. Запрос не выполнен: ', err))
  }

  deleteLike(id) {
    return fetch(`${this._address}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.log('Ошибка. Запрос не выполнен: ', err))
  }

  deleteCard(id) {
    // https://mesto.nomoreparties.co/v1/cohortId/cards/cardId 
    return fetch(`${this._address}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .catch(err => console.log('Ошибка. Запрос не выполнен: ', err))
  }

  // DELETE 

  setMyCard(item) {
    // console.log('https://mesto.nomoreparties.co/v1/cohortId/cards')
    // console.log(`${this._address}/cards`)
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: item.name,
        link: item.link
      })
    })
      .then((res) => {
        console.log(res)
        return res.json();
      })

      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен: ', err);
      })



  }



}

export { Api }