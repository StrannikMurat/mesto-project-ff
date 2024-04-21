import { openCardPopup } from "..";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: Функция создания карточки
export function createCardElement(
  cardData,
  deleteCallback,
  likeCallBack,
  openCardCollBack
) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  const elementImage = cardElement.querySelector(".card__image");
  const elementTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementTitle.textContent = cardData.name;

  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  likeButton.addEventListener("click", function () {
    cardLike(likeButton);
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

// функуия лайка карточки
export function cardLike(evt) {
  evt.classList.toggle("card__like-button_is-active");
}


