import { closePopup } from "./modal";
import {
  nameDisplay,
  jobDisplay,
  nameInput,
  jobInput,
  formElementEdit,
} from "..";
import { updateUserData } from "./API";
import { changeButtonText } from "..";
const buttonName = document.querySelector(".buttonName");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
export function handleFormSubmitAboutYourself(evt) {
  evt.preventDefault();
  changeButtonText(buttonName, true);

  // Получите значение полей jobInput и nameInput из свойства value
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Вставьте новые значения с помощью textContent
  nameDisplay.textContent = nameValue;
  jobDisplay.textContent = jobValue;

  closePopup(formElementEdit);

  const userData = {
    name: nameDisplay.textContent,
    about: jobDisplay.textContent,
  }

  updateUserData(userData)
    .then((data) => {
      data.name = userData.name;
      data.about = userData.about;
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeButtonText(buttonName, false);
    })
}
