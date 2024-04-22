import { closePopup } from "./modal";
import { nameDisplay, jobDisplay, nameInput, jobInput, formElement } from "..";



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
export function handleFormSubmitAboutYourself(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    const nameValue = nameInput.value;
    const jobValue = jobInput.value;

    // Вставьте новые значения с помощью textContent
    nameDisplay.textContent = nameValue;
    jobDisplay.textContent = jobValue;

    closePopup(formElement);
}
