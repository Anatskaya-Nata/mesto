
class Card {
    constructor(data, currentUserId, templateSelector, handleCardClick, cardDeleteHandler, likeClickHandler) {
        this._name = data.name;
        this._link = data.link;
        this._cardOwnerId = data.owner._id
        this._cardId = data._id
        this._currentUserId = currentUserId
        this._templateSelector = templateSelector;
        this._likes = data.likes
       this._handleCardClick = handleCardClick
       this._cardDeleteHandler = cardDeleteHandler
       this._likeClickHandler = likeClickHandler
    }

    setLikesInfo(newCardData) {
        if(newCardData) {
            this._likes = newCardData.likes
        }

        const likesCont = this._likes.length
        this._item.querySelector('.gallary__quantity').textContent = likesCont

        this.isLiked = this._likes.find( person => person._id === this._currentUserId) // null //
        if(this.isLiked) {
            this._item.querySelector('.gallary__icon').classList.add('gallary__icon_active')  
        } else {
            this._item.querySelector('.gallary__icon').classList.remove('gallary__icon_active')  
        }
    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector)
        .content
        .querySelector('.gallary__card')
        .cloneNode(true);
        
        return cardElement;
    }

    generateCard(){
        
        this._item = this._getTemplate()
        const linkItem = this._item.querySelector('.gallary__item')      
        this._item.querySelector('.gallary__text').textContent = this._name;
        linkItem.src = this._link;
        linkItem.alt = this._name;



        this.setLikesInfo()

        // this._cardOwnerId = data.owner._id
        // this._currentUserId = currentUserId
        if(this._cardOwnerId !== this._currentUserId) {
            this._item.querySelector('.gallary__delete').classList.add('gallary__delete_hidden')
        }

       
       
        this._setEventListeners()
        return this._item;
    }

    _setEventListeners() {
        this._item.querySelector('.gallary__icon').addEventListener('click',(evt) => {
            this._likeClickHandler(this)
            // this._handleLikeIcon(evt)
        }) 
        this._item.querySelector('.gallary__delete').addEventListener('click',(evt) => {
            this._cardDeleteHandler(this)// id
            
      }) 
        this._item.querySelector('.gallary__item').addEventListener('click',() => {
          
            this._handleCardClick()
        }) 
    }

    _handleLikeIcon (evt) {
        evt.target.classList.toggle('gallary__icon_active')  
    }
    
    handleDeleteCard (evt){
      this._item.remove() 
      this._item = null 
    }
}


   

    export{Card}
 
 
  
