(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{bm:()=>q});var t=document.querySelector("#card-template").content;function n(e,n,r,o){var c=t.querySelector(".places__item").cloneNode(!0),p=c.querySelector(".card__image"),u=c.querySelector(".card__title"),a=c.querySelector(".card__like-button"),d=c.querySelector(".card__delete-button");return p.src=e.link,p.alt=e.name,u.textContent=e.name,d.addEventListener("click",(function(){c.remove()})),a.addEventListener("click",(function(){a.classList.toggle("card__like-button_is-active")})),p.addEventListener("click",(function(e){var t=e.target;q({name:t.alt,link:t.src})})),c}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",c)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c)}function c(e){"Escape"==e.key&&o(Array.from(document.querySelectorAll(".popup")).find((function(e){return e.classList.contains("popup_is-opened")})))}var p=document.querySelector(".popup_type_edit"),u=p.querySelector(".popup__input_type_name"),a=p.querySelector(".popup__input_type_description"),d=document.querySelector(".popup_type_new-card .popup__form"),i=document.querySelector(".popup_type_new-card"),l=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=n(e);l.append(t)}));var s=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),m=_.querySelector(".popup__close");s.addEventListener("click",(function(){r(_)})),m.addEventListener("click",(function(){o(_)}));var y=document.querySelector(".popup_type_new-card"),v=document.querySelector(".profile__add-button"),f=y.querySelector(".popup__close");v.addEventListener("click",(function(){r(y)})),f.addEventListener("click",(function(){o(y)}));var k=document.querySelector(".popup_type_image");function q(e){var t=k.querySelector(".popup__image"),n=k.querySelector(".popup__caption");r(k),t.src=e.link,t.alt=e.name,n.textContent=e.name}k.querySelector(".popup__close").addEventListener("click",(function(){o(k)})),document.addEventListener("click",(function(e){e.target.classList.contains("popup")&&o(e.target)})),p.addEventListener("submit",(function(e){e.preventDefault();var t=u.value,n=a.value,r=document.querySelector(".profile__title"),c=document.querySelector(".profile__description");r.textContent=t,c.textContent=n,o(p)})),d.addEventListener("submit",(function(e){e.preventDefault();var t=document.querySelector(".popup__input_type_url"),r=document.querySelector(".popup__input_type_card-name"),c=n({link:t.value,name:r.value});document.querySelector(".places__list").prepend(c),d.reset(),o(i)}))})();