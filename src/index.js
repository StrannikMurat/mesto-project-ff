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
import { addNewCard, addForm } from "./scripts/addNewCard";

import {
  enableValidation,
  clearValidation,
  validationConfig,
} from "./scripts/validation";

import { addNewAvatar } from "./scripts/newAvatar";
import { formAvatar } from "./scripts/newAvatar";

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
export const formElementEdit = document.querySelector(".popup_type_edit");
export const nameInput = formElementEdit.querySelector(
  ".popup__input_type_name"
);
export const jobInput = formElementEdit.querySelector(
  ".popup__input_type_description"
);

// dom узлы элементов, куда должны быть вставлены значения полей
export const nameDisplay = document.querySelector(".profile__title");
export const jobDisplay = document.querySelector(".profile__description");

export const profileImage =  document.querySelector(".profile__image");

export const popupTypeAvatar = document.querySelector('.popup_type_avatar');
const profileImageCorrect = document.querySelector('.profile__image_correct');
const closePopupTypeAvatar = popupTypeAvatar.querySelector('.popup__close');

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
  clearValidation(
    popupTypeEdit.querySelector(validationConfig.formSelector),
    validationConfig
  );

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
  clearValidation(
    popupTypeNewCard.querySelector(validationConfig.formSelector),
    validationConfig
  );
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
document.addEventListener("click", closeOverlay);

profileImageCorrect.addEventListener('click', function() {
  openPopup(popupTypeAvatar);
  clearValidation(
    popupTypeAvatar.querySelector(validationConfig.formSelector),
    validationConfig
  );
})

closePopupTypeAvatar.addEventListener('click', function() {
  closePopup(popupTypeAvatar);
})

// Обработчик newForm
formElementEdit.addEventListener("submit", handleFormSubmitAboutYourself);

// Обработчик добавления новой карточки
addForm.addEventListener("submit", addNewCard);

formAvatar.addEventListener('submit', addNewAvatar);

enableValidation();

import { getUserData } from "./scripts/API";
import { getAllCards } from "./scripts/API";

Promise.all([getUserData(), getAllCards()])
.then(([user, cards]) => {
  nameDisplay.textContent = user.name;
  jobDisplay.textContent = user.about;
  profileImage.style.backgroundImage = `url('${user.avatar}')`;

  cards.forEach((element) => {
    placesList.append(createCardElement(element));
  });
})
.catch((err) => {
  console.log(err);
});

// Функция для изменения текста кнопки
export function changeButtonText(button, isLoading) {
  button.textContent = isLoading ? "Сохранение..." : "Сохранить";
}


// export const popupTypeAvatar = document.querySelector('.popup_type_avatar');
// const profileImageCorrect = document.querySelector('.profile__image_correct');
// const closePopupTypeAvatar = popupTypeAvatar.querySelector('.popup__close');

// profileImageCorrect.addEventListener('click', function() {
//   openPopup(popupTypeAvatar);
//   clearValidation(
//     popupTypeAvatar.querySelector(validationConfig.formSelector),
//     validationConfig
//   );
// })

// closePopupTypeAvatar.addEventListener('click', function() {
//   closePopup(popupTypeAvatar);
// })

// import { addNewAvatar } from "./scripts/newAvatar";
// import { formAvatar } from "./scripts/newAvatar";

// formAvatar.addEventListener('submit', addNewAvatar);


