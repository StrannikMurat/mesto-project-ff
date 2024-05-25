// Импортировал функцию создания карточек
import { createCardElement } from "./card";
import { closePopup } from "./modal";
// import { userId } from "..";

// dom узел контейнера
import { placesList } from "..";
// import { changeButtonText} from "..";

// Функция добавления новой карточки
export const addForm = document.querySelector(
  ".popup_type_new-card .popup__form"
);
const closeFormAddNewCard = document.querySelector(".popup_type_new-card");

// dom узлы полей инпутов
const cardLinkInput = document.querySelector(".popup__input_type_url");
const cardNameInput = document.querySelector(".popup__input_type_card-name");
const buttonNamePlace = document.querySelector(".button_name_place");
import { addCardDate } from "./API";
import { changeButtonText } from "..";

export function addNewCard(evt) {
  evt.preventDefault();
  changeButtonText(buttonNamePlace, true);

  // Объект с данными из инпутов
  const newCardDate = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };

  addCardDate(newCardDate)
    .then((data) => {
      placesList.prepend(createCardElement(data));
    })
    .then(() => {
      addForm.reset();
    })
    .then(() => {
      closePopup(closeFormAddNewCard);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeButtonText(buttonNamePlace, false);
    });
}
