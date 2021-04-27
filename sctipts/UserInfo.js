import {newUserForm} from './constants.js';

class UserInfo {
    constructor(userForm){
      this._userName = userForm.userName
      this._userJob = userForm.userJob
       //this._nameSelector = userForm.nameSelector
       //this._jobSelector = userForm.jobSelector

        console.log(userForm.userName)
    }
    getUserInfo(){
      
    }
    
    setUserInfo(){
        const userName = document.querySelector('.profile__name')
        userName.textContent = this._userName
        const userJob = document.querySelector('.profile__job')
        userJob.textContent = this._userJob
    }
}



export {UserInfo}


constructor({ text, image, description }) { // достаём ключи объекта сразу
    // теперь значения ключей объекта data
    // лежат в одноимённых переменных
        this._text = text;
        this._image = image;
        this._description = description;
    }