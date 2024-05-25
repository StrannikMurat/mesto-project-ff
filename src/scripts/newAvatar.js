import { changeAvatarApi } from "./API";
import { closePopup } from "./modal";
import { popupTypeAvatar } from "..";
import { changeButtonText } from "..";

export const formAvatar = document.querySelector(".avatar__form");
const inputTypeAvatar = formAvatar.querySelector(".popup__input_type_avatar");
const profileImage = document.querySelector(".profile__image");
const btnAvatar = formAvatar.querySelector(".popup__button");

export function addNewAvatar(evt) {
  evt.preventDefault();
  changeButtonText(btnAvatar, true);

  changeAvatarApi(inputTypeAvatar.value)
    .then((data) => {
      profileImage.style.backgroundImage = `url('${data.avatar}')`;
    })
    .then(() => {
      formAvatar.reset();
    })
    .then(() => {
      closePopup(popupTypeAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      changeButtonText(btnAvatar, false);
    });
}
