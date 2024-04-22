// импорт css
import "./style/index.css";

// импорт создания, удаления, лайка, карточек
import { createCardElement, deleteCard, cardLike } from "./scripts/card";

// импорт хранилища карточек
import { initialCards } from "./scripts/cards";

// импорт функций открытия, закрытия popup
import { openPopup, closePopup, closeOverlay } from "./scripts/modal";

// Импорт функции newForm
import { handleFormSubmitAboutYourself } from "./scripts/newForm";

// Импорт функции добавления новой карточки
import { addNewCard,addForm } from "./scripts/addNewCard";

// dom узел добавления карточек
export const placesList = document.querySelector(".places__list");

// dom узлы открытия, закрытия profile edit
const profileEditButton = document.querySelector(".profile__edit-button");
export const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupClose = popupTypeEdit.querySelector(".popup__close");

// dom узлы открытия, закрытия попапа добавления карточки
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const profileAddButton = document.querySelector(".profile__add-button");
const popupCloseTypeNewCard = popupTypeNewCard.querySelector(".popup__close");

// dom узелы открытия попапа карточки превью
export const openCard = document.querySelector(".popup_type_image");
const popupImage = openCard.querySelector(".popup__image");
const popupCaption = openCard.querySelector(".popup__caption");

// dom узел Обработчика закрытия попапа карточки превью
const closeCardPopup = openCard.querySelector(".popup__close");

// dom узлы полей формы заполнения профиля
export const formElement = document.querySelector('.popup_type_edit');
export const nameInput = formElement.querySelector('.popup__input_type_name');
export const jobInput = formElement.querySelector('.popup__input_type_description');

// dom узлы элементов, куда должны быть вставлены значения полей
export const nameDisplay = document.querySelector('.profile__title');
export const jobDisplay = document.querySelector('.profile__description');

// функция открытия попапа карточки превью
export function openCardPopup(evt) {
  openPopup(openCard);
  popupImage.src = evt.link;
  popupImage.alt = evt.name;
  popupCaption.textContent = evt.name;
}

// открыть profile edin
profileEditButton.addEventListener("click", function () {
  openPopup(popupTypeEdit);
  nameInput.value = nameDisplay.textContent;
  jobInput.value = jobDisplay.textContent;
});

// закрыть profile edit
popupClose.addEventListener("click", function () {
  closePopup(popupTypeEdit);
});

// открыть попат добавления карточки
profileAddButton.addEventListener("click", function () {
  openPopup(popupTypeNewCard);
});

// закрыть попап добавления карточки
popupCloseTypeNewCard.addEventListener("click", function () {
  closePopup(popupTypeNewCard);
});

// Обработчик закрытия попапа карточки превью
closeCardPopup.addEventListener("click", function () {
  closePopup(openCard);
});

//Обработчик закрытия closeOverlay
document.addEventListener('click', closeOverlay);

// Обработчик newForm
formElement.addEventListener('submit', handleFormSubmitAboutYourself);

// Обработчик добавления новой карточки
addForm.addEventListener('submit', addNewCard);

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
  const cardElem = createCardElement(item, deleteCard, cardLike, openCardPopup);
  placesList.append(cardElem);
});










