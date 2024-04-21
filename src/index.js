// импорт css
import "./style/index.css";

// dom узел добавления карточек
export const placesList = document.querySelector(".places__list");

// импорт создания, удаления, лайка, карточек
import { createCardElement } from "./scripts/card";
import { deleteCard } from "./scripts/card";
import { cardLike } from "./scripts/card";

// импорт хранилища карточек
import { initialCards } from "./scripts/cards";
// import { handleEscKey } from "./scripts/modal";

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElem = createCardElement(item, deleteCard, cardLike, openCardPopup);
  placesList.append(cardElem);
});

// dom узлы открытия, закрытия profile edit
const profileEditButton = document.querySelector(".profile__edit-button");
export const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupClose = popupTypeEdit.querySelector(".popup__close");

// импорт функций открытия, закрытия popup
import { openPopup } from "./scripts/modal";
import { closedPopup } from "./scripts/modal";

// открыть profile edin
profileEditButton.addEventListener("click", function () {
  openPopup(popupTypeEdit);
});

// закрыть profile edit
popupClose.addEventListener("click", function () {
  closedPopup(popupTypeEdit);
});

// dom узлы открытия, закрытия попапа добавления карточки
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCloseTypeNewCard = popupTypeNewCard.querySelector(".popup__close");

// открыть попат добавления карточки
profileAddButton.addEventListener("click", function () {
  openPopup(popupTypeNewCard);
});

// закрыть попап добавления карточки
popupCloseTypeNewCard.addEventListener("click", function () {
  closedPopup(popupTypeNewCard);
});

// функция открытия попапа карточки превью
export const openCard = document.querySelector(".popup_type_image");

export function openCardPopup(evt) {
  const popupImage = openCard.querySelector(".popup__image");
  const popupCaption = openCard.querySelector(".popup__caption");

  openPopup(openCard);
  popupImage.src = evt.link;
  popupImage.alt = evt.name;
  popupCaption.textContent = evt.name;
}

// Обработчик закрытия попапа карточки превью
const closeCardPopup = openCard.querySelector(".popup__close");
closeCardPopup.addEventListener("click", function () {
  closedPopup(openCard);
});

// Импорт фунуции закрытия попап по клику вне его области
import { closeOverlay } from "./scripts/modal";
//Обработчик закрытия closeOverlay
document.addEventListener('click', closeOverlay);

// Импорт функции newForm
import { handleFormSubmit } from "./scripts/newForm";
import { formElement } from "./scripts/newForm";
// Обработчик newForm
formElement.addEventListener('submit', handleFormSubmit);

// Импорт функции добавления новой карточки
import { addNewCard } from "./scripts/addNewCard";
import { addForm } from "./scripts/addNewCard";

// Обработчик добавления новой карточки
addForm.addEventListener('submit', addNewCard);










