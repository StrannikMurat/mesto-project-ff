import { closedPopup } from "./modal";

// Находим форму в DOM
export const formElement = document.querySelector('.popup_type_edit');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
export function handleFormSubmit(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    const nameDisplay = document.querySelector('.profile__title');
    const jobDisplay = document.querySelector('.profile__description');

    // Вставьте новые значения с помощью textContent
    nameDisplay.textContent = nameValue;
    jobDisplay.textContent = jobValue;

    closedPopup(formElement);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);