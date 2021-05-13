

class UserInfo {
  constructor({name:userNamesSelector, job: userJobSelector}){
    this._name = document.querySelector(userNamesSelector),
    this._job = document.querySelector(userJobSelector)
    }
    
    getUserInfo(){
     
    return {name:this._name.textContent,job: this._job.textContent}
   
    }

          setUserInfo({name,job}){
     
        this._name.textContent = name
        this._job.textContent =  job
          
    }
}


export {UserInfo}


