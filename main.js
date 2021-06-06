(()=>{"use strict";var t={174:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),e.hash&&(t+=e.hash),e.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},643:(t,e,n)=>{t.exports=n.p+"c15cb08ab8ecfaba54c6.jpg"},346:(t,e,n)=>{t.exports=n.p+"8feb59b7c6bc17f877b2.svg"},795:(t,e,n)=>{t.exports=n.p+"d5d6f8af0577b9c95ee4.svg"},778:(t,e,n)=>{t.exports=n.p+"2af49b82d305a6ea3442.svg"},295:(t,e,n)=>{t.exports=n.p+"93c771f5f8582261951d.png"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",n.b=document.baseURI||self.location.href,(()=>{var t=n(174),e=n.n(t),o=new URL(n(346),n.b),r=new URL(n(643),n.b),i=new URL(n(295),n.b),u=new URL(n(795),n.b),a=new URL(n(778),n.b);e()(o),e()(r),e()(i),e()(u),e()(a);var c=document.querySelector(".profile__icon"),s=(document.querySelector(".popup__close_icon_edit"),document.querySelector(".popup"),document.querySelector(".popup.popup_theme_edit"),document.querySelector(".popup__form_theme_edit")),l=s.querySelector(".popup__info_input_name"),f=s.querySelector(".popup__info_input_job"),p=(document.querySelector(".profile__name"),document.querySelector(".profile__job"),document.querySelector(".profile__plus")),_=(document.querySelector(".popup.popup_theme_place"),document.querySelector(".popup__close_icon_place"),document.querySelector(".popup__form_theme_place")),h=(document.querySelector(".gallary__item"),document.querySelector(".popup__close_icon_image"),document.querySelector(".popup_theme_image"),document.querySelector(".popup__image"),document.querySelector(".popup__text"),document.querySelector(".gallary__cards"),document.querySelector(".gallary__template").content,document.querySelector(".popup__info_input_place"),document.querySelector(".popup__info_input_link"),document.querySelector(".popup__button_place"),document.querySelector(".profile__photo")),y=(document.querySelector(".popup__info_input_avatar"),document.querySelector(".popup__button_avatar"),document.querySelector(".popup__button_edit"),{formSelector:".popup__form",inputSelector:".popup__info",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_inactive",inputErrorClass:"popup__info_type_error",errorClass:"popup__info-error_active"});function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const m=function(){function t(e,n,o,r,i,u){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=e.name,this._link=e.link,this._cardOwnerId=e.owner._id,this.cardId=e._id,this._currentUserId=n,this._templateSelector=o,this._likes=e.likes,this._handleCardClick=r,this._cardDeleteHandler=i,this._likeClickHandler=u}var e,n;return e=t,(n=[{key:"setLikesInfo",value:function(t){var e=this;t&&(this._likes=t.likes);var n=this._likes.length;this._item.querySelector(".gallary__quantity").textContent=n,this.isLiked=this._likes.find((function(t){return t._id===e._currentUserId})),this.isLiked?this._item.querySelector(".gallary__icon").classList.add("gallary__icon_active"):this._item.querySelector(".gallary__icon").classList.remove("gallary__icon_active")}},{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".gallary__card").cloneNode(!0)}},{key:"generateCard",value:function(){this._item=this._getTemplate();var t=this._item.querySelector(".gallary__item");return this._item.querySelector(".gallary__text").textContent=this._name,t.src=this._link,t.alt=this._name,this.setLikesInfo(),this._cardOwnerId!==this._currentUserId&&this._item.querySelector(".gallary__delete").classList.add("gallary__delete_hidden"),this._setEventListeners(),this._item}},{key:"_setEventListeners",value:function(){var t=this;this._item.querySelector(".gallary__icon").addEventListener("click",(function(e){t._likeClickHandler(t)})),this._item.querySelector(".gallary__delete").addEventListener("click",(function(e){t._cardDeleteHandler(t)})),this._item.querySelector(".gallary__item").addEventListener("click",(function(){t._handleCardClick()}))}},{key:"_handleLikeIcon",value:function(t){t.target.classList.toggle("gallary__icon_active")}},{key:"handleDeleteCard",value:function(t){this._item.remove(),this._item=null}}])&&d(e.prototype,n),t}();function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const b=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElement=n,this._submitButton=this._formElement.querySelector(this._submitButtonSelector)}var e,n;return e=t,(n=[{key:"_showError",value:function(t,e){var n=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideError",value:function(t){var e=this._formElement.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideError(t):this._showError(t,t.validationMessage)}},{key:"_setEventListeners",value:function(){var t=this,e=Array.from(this._formElement.querySelectorAll(this._inputSelector));this._toggleButtonState(e,this._submitButton),e.forEach((function(n){n.addEventListener("input",(function(){t._checkInputValidity(n),t._toggleButtonState(e,t._submitButton)}))}))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"disableSubmitButton",value:function(){this._submitButton.setAttribute("disabled",!0),this._submitButton.classList.add(this._inactiveButtonClass)}},{key:"_toggleButtonState",value:function(t){this._hasInvalidInput(t)?this.disableSubmitButton():(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.removeAttribute("disabled"))}},{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}}])&&v(e.prototype,n),t}();function g(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const S=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderedItems=e.items,this._renderer=e.renderer,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"setDefaultItems",value:function(){var t=this;this._renderedItems.forEach((function(e){return t._renderer(e,t._container)}))}},{key:"addItem",value:function(t){this._renderer(t,this._container)}}])&&g(e.prototype,n),t}();function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var w=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose,!1)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose,!1)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this,e=this._popup.querySelector(".popup__close");this._popup.addEventListener("click",(function(n){n.target!==n.currentTarget&&n.target!==e||t.close()}))}}])&&k(e.prototype,n),t}();function E(t){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function j(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function C(t,e,n){return(C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function O(t,e){return(O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function L(t,e){return!e||"object"!==E(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=q(o);if(r){var n=q(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return L(this,t)});function u(t,e,n){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(o=i.call(this,t))._handleFormSubmit=e,o.form=o._popup.querySelector(".popup__form"),o.submitButton=o.form.querySelector(".popup__button"),o._defaultSubmitText=o._popup.querySelector(".popup__button").textContent,o}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList=Array.from(this._popup.querySelectorAll(".popup__info")),this._inputFormValues={},this._inputList.forEach((function(e){return t._inputFormValues[e.name]=e.value})),this._inputFormValues}},{key:"waitButtonSubmit",value:function(t){this.submitButton.textContent=t?"Coхранение.....":this._defaultSubmitText}},{key:"setEventListeners",value:function(){var t=this;C(q(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues())}))}},{key:"close",value:function(){C(q(u.prototype),"close",this).call(this),this.form.reset()}}])&&j(e.prototype,n),u}(w);function I(t){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function R(t,e,n){return(R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function T(t,e){return(T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function U(t,e){return!e||"object"!==I(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function D(t){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const A=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(o);if(r){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return U(this,t)});function u(){return B(this,u),i.apply(this,arguments)}return e=u,(n=[{key:"open",value:function(t){R(D(u.prototype),"open",this).call(this),this._popup.querySelector(".popup__image").src=t.link,this._popup.querySelector(".popup__text").textContent=t.name}}])&&x(e.prototype,n),u}(w);function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const V=function(){function t(e){var n=e.name,o=e.about,r=e.avatar;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=document.querySelector(n),this._about=document.querySelector(o),this._avatar=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,job:this._about.textContent,avatar:this._avatar.src}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about,o=t.avatar;this._name.textContent=e,this._about.textContent=n,this._avatar.src=o}}])&&F(e.prototype,n),t}();function z(t){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function H(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function N(t,e,n){return(N="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=G(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function M(t,e){return(M=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function J(t,e){return!e||"object"!==z(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function G(t){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}const Q=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&M(t,e)}(u,t);var e,n,o,r,i=(o=u,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=G(o);if(r){var n=G(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return J(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._handleFormSubmit=e,n.form=n._popup.querySelector(".popup__form"),n}return e=u,(n=[{key:"setEventListeners",value:function(){var t=this;N(G(u.prototype),"setEventListeners",this).call(this),this.form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit()}))}},{key:"setNewSubmitHandler",value:function(t){this._handleFormSubmit=t}}])&&H(e.prototype,n),u}(w);function $(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function K(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var W=new(function(){function t(e){var n=e.address,o=e.token,r=e.groupID;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=o,this._groupID=r}var e,n;return e=t,(n=[{key:"getFullPageInfo",value:function(){return Promise.all([this.getCards(),this.getUserData()])}},{key:"getCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getUserData",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:{authorization:this._token}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserData",value:function(t){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about,avatar:t.avatar})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setLike",value:function(t){return fetch("".concat(this._address,"/cards/likes/").concat(t),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this._address,"/cards/likes/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._address,"/cards/").concat(t),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setMyCard",value:function(t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return console.log(t),t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserAvatar",value:function(t){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&$(e.prototype,n),t}())({address:"https://mesto.nomoreparties.co/v1/cohort-24",token:"cf1392bf-57d4-4bdf-840f-466cfe9d8ed2",groupID:"cohort-24"}),X=new Q(".popup_theme_approval");function Y(t){X.setNewSubmitHandler((function(){W.deleteCard(t.cardId).then((function(e){t.handleDeleteCard(),X.close()})).catch((function(t){return console.log("Ошибка при удалении карточки: ".concat(t))}))})),X.open()}function Z(t){t.isLiked?W.deleteLike(t.cardId).then((function(e){t.setLikesInfo(e)})):W.setLike(t.cardId).then((function(e){t.setLikesInfo(e)}))}X.setEventListeners(),W.getFullPageInfo().then((function(t){var e,n,o=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=t&&("undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=n){var o,r,i=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);u=!0);}catch(t){a=!0,r=t}finally{try{u||null==n.return||n.return()}finally{if(a)throw r}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return K(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=o[0],i=o[1];console.log("cards",r);var u=i._id;nt.setUserInfo(i);var a=new S({items:r,renderer:function(t,e){var n=new m(t,u,".gallary__template",(function(){et.open(t)}),Y,Z).generateCard();e.prepend(n)}},".gallary__cards");a.setDefaultItems();var c=new P(".popup_theme_place",(function(t){c.waitButtonSubmit(!0),W.setMyCard({name:t.place,link:t.link}).then((function(t){a.addItem(t),c.close(),console.log(t)})).catch((function(t){return console.log("Ошибка при отправке карточки: ".concat(t))})).finally((function(){return c.waitButtonSubmit(!1)}))}));c.setEventListeners(),p.addEventListener("click",(function(){tt.disableSubmitButton(),c.open()}))})).catch((function(t){return console.log("Ошибка при получении данных user: ".concat(t))})),new b(y,s).enableValidation();var tt=new b(y,_);tt.enableValidation();var et=new A(".popup_theme_image");et.setEventListeners();var nt=new V({name:".profile__name",about:".profile__job",avatar:".profile__photo"}),ot=new P(".popup_theme_edit",(function(t){ot.waitButtonSubmit(!0),W.setUserData({name:t.nick,about:t.about}).then((function(t){nt.setUserInfo(t),ot.close(),console.log(t)})).catch((function(t){return console.log("Ошибка при отправке User данных: ".concat(t))})).finally((function(){return ot.waitButtonSubmit(!1)}))}));c.addEventListener("click",(function(){ot.open();var t=nt.getUserInfo();l.value=t.name,f.value=t.job}));var rt=new P(".popup_theme_avatar",(function(t){rt.waitButtonSubmit(!0),W.setUserAvatar(t).then((function(t){console.log(t),new V({name:".profile__name",about:".profile__job",avatar:".profile__photo"}).setUserInfo(t),rt.close()})).catch((function(t){return console.log("Ошибка при отправке автара: ".concat(t))})).finally((function(){return rt.waitButtonSubmit(!1)}))}));rt.setEventListeners(),h.addEventListener("click",(function(){rt.open()})),ot.setEventListeners()})()})();
//# sourceMappingURL=main.js.map