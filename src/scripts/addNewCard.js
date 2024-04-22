// Импортировал функцию создания карточек
import { createCardElement } from "./card";
import { closePopup } from "./modal";

// dom узел контейнера
import { placesList } from "..";

// Функция добавления новой карточки
export const addForm = document.querySelector('.popup_type_new-card .popup__form');
const closeFormAddNewCard = document.querySelector('.popup_type_new-card');

// dom узлы полей инпутов
const cardLinkInput = document.querySelector('.popup__input_type_url');
const cardNameInput = document.querySelector('.popup__input_type_card-name');

export function addNewCard(evt) {
    evt.preventDefault();

    // Объект с данными из инпутов
    const newCardDate = {
        link: cardLinkInput.value,
        name: cardNameInput.value,
    }

    // Вызов функции создания карточек, принимающая как аргумент 
    // объект с информацией для данных
    const newCard = createCardElement(newCardDate);

    // Добавление в контейнер
    placesList.prepend(newCard);

    // очистка диалогового окна
    addForm.reset();
    // закрытие диалоового окна
    closePopup(closeFormAddNewCard);
};



