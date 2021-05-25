class Api{
    constructor({address, token, groupID}){
        this._address = address;
        this._token = token;
        this._groupID = groupID
    }

    getCards(){
    
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
   getUserData(){
        return fetch(`${this._address}/users/me`,{
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

    setMyCard(item){
          return fetch(`${this._address}/cards`, {
            method: 'POST',
          headers: {
              authorization: this._token,
              'Content-Type': 'multipart/form-data'
          },
            body: ({
              name: item.name,
              link: item.link  
            })
      }) 
    }

}

export {Api}