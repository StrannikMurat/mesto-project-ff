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

  const userData = {
    name: nameInput.value,
    about: jobInput.value,
  }

  updateUserData(userData)
    .then((data) => {
      data.name = userData.name;
      data.about = userData.about;

      nameDisplay.textContent = data.name;
      jobDisplay.textContent = data.about;
    })
    .then(() => {
      closePopup(formElementEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeButtonText(buttonName, false);
    })
}
