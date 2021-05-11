import {newUserForm} from './constants.js';
import { formPlace } from './index.js';

class UserInfo {
    constructor(item,userNamesSelector,userJobSelector){
        this._name = item.name
        this._job = item.job
        this._userNamesSelector = userNamesSelector
        this._userJobSelector = userJobSelector
        //console.log(this._name)

    }
    
    getUserInfo(){

       const userName = document.querySelector(this._userNamesSelector)
       const userJob = document.querySelector(this._userJobSelector)
       
        this._data ={
         name: userName,
         job: userJob
        }
        
       
       // userJob.textContent = this._job
        
     
    //console.log(this._data.job)
        
       
    return this._data
   
    }

  
    
    setUserInfo(){
        this.getUserInfo()
        this._data.name.textContent = this._name
        this._data.job.textContent =  this._job
      
    

      //  console.log(this.getUserInfo())
        
    }
}



export {UserInfo}


