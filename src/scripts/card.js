import { openCardPopup } from "..";
import { deleteCardApi } from "./API";
import { likeButtonApi } from "./API";
import { delBtnApi } from "./API";
import { userId } from "..";
// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function createCardElement(
  cardData,
  deleteCardCollback,
  cardLikeCollback,
  openCardPopupCollback,
) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const elementImage = cardElement.querySelector(".card__image");
  const elementTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const countLikeBtn = cardElement.querySelector(".card__like-button_count");
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementTitle.textContent = cardData.name;
  countLikeBtn.textContent = cardData.likes.length;
  
  if(cardData.owner._id !== userId) {
    deleteButton.remove();
  }

    deleteButton.addEventListener("click", function () {
      deleteCardApi(cardData._id)
      .catch((err) => {
        console.log(err);
      })

      deleteCard(cardElement);
    });

    const liked = cardData.likes.some((like) => like._id === userId);
    if (liked) {
      likeButton.classList.add("card__like-button_is-active");
    }
  
  likeButton.addEventListener("click", function () {
    if(likeButton.classList.contains('card__like-button_is-active')) {
      delBtnApi(cardData._id)
      .then((data) => {
        countLikeBtn.textContent = data.likes.length;
        likeButton.classList.remove('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      likeButtonApi(cardData._id)
      .then((data) => {
        countLikeBtn.textContent = data.likes.length;
        likeButton.classList.add('card__like-button_is-active');
      })
      .catch((err) => {
        console.log(err);
      })
    }
  });

  elementImage.addEventListener("click", function (evt) {
    const targetImage = evt.target;

    const cardData = {
      name: targetImage.alt,
      link: targetImage.src,
    };
    openCardPopup(cardData);
  });

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(cardElem) {
  cardElem.remove();
}