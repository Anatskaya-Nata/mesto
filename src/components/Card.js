
class Card {
    constructor(data,templateSelector, handleCardClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
       this._handleCardClick = handleCardClick
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
     

       
        this._setEventListeners()
        

        return this._item;
        
    }
    _setEventListeners() {
        this._item.querySelector('.gallary__icon').addEventListener('click',(evt) => {
            this._handleLikeIcon(evt)
        }) 
        this._item.querySelector('.gallary__delete').addEventListener('click',(evt) => {
            this._handleDeleteCard(evt)
        }) 
        this._item.querySelector('.gallary__item').addEventListener('click',() => {
          
            this._handleCardClick()
        }) 
    }

    _handleLikeIcon (evt) {
        evt.target.classList.toggle('gallary__icon_active')  
    }
    _handleDeleteCard (evt){
    
      this._item.remove() 
      this._item = null 
  
    }
 
}


   

    export{Card}
 
 
  
