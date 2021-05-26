  
class Section  { 
  constructor(itemCreator, containerSelector){ 
    this._renderedItems = itemCreator.items 
    this._renderer = itemCreator.renderer; 
    this._container = document.querySelector(containerSelector) 
  }  
     
  setDefaultItems(){ 
      this._renderedItems.forEach(item => this._renderer(item,this._container)) 
    } 

  addItem(element){ 
      this._renderer(element,this._container) 
    } 
 } 


   export {Section}

  