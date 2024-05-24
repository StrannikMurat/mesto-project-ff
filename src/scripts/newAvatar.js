import { avatarApi } from "./API";
import { closePopup } from "./modal";
import { popupTypeAvatar } from "..";
import { changeButtonText } from "..";

export const formAvatar = document.querySelector('.avatar__form');
const inputTypeAvatar = formAvatar.querySelector('.popup__input_type_avatar');
const profileImage = document.querySelector('.profile__image');
const btnAvatar = formAvatar.querySelector('.popup__button');


export function addNewAvatar(evt) {
    evt.preventDefault();
    changeButtonText(btnAvatar, true);

    avatarApi(inputTypeAvatar.value)
    .then((data) => {
        profileImage.style.backgroundImage = `url('${data.avatar}')`;
    })
    .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        changeButtonText(btnAvatar, false);
      })

    formAvatar.reset()
    closePopup(popupTypeAvatar);
}