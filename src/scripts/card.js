import { openCardPopup} from "..";
import { deleteCardApi } from "./API";
import { likeButtonApi } from "./API";
import { delBtnApi } from "./API";
// import { userId } from "..";
// Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточки
export function createCardElement(
  cardData,
  userId,
  deleteCardCollback,
  cardLikeCollback,
  openCardPopupCollback,
) {

  // Берём DOM узел, куда будем клонировать содержимое карточки
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);

  // DOM узлы карточки для отрисовки 
  const elementImage = cardElement.querySelector(".card__image");
  const elementTitle = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const countLikeBtn = cardElement.querySelector(".card__like-button_count");

  // Берём инфу о карточке для отображения на странице
  elementImage.src = cardData.link;
  elementImage.alt = cardData.name;
  elementTitle.textContent = cardData.name;
  countLikeBtn.textContent = cardData.likes.length;
  
  // Сравниваем id пользователя с id создаваемоей карточки
  // если они не совпадают, то убираем иконку удаления
  if(cardData.owner._id !== userId) {
    deleteButton.remove();
  }

  console.log(userId);

    // Слушатель удаления карточки
    deleteButton.addEventListener("click", function () {
      deleteCardApi(cardData._id)
      .then(() => {
        deleteCard(cardElement);
      })
      .catch((err) => {
        console.log(err);
      })
    });

    // Проверяем, лайкнул ли пользователь с определенным идентификатором пользователя карточку
    // Если пользователь лайкнул карточку, добавляем CSS-класс "card__like-button_is-active" к элементу likeButton
    // что указывает на то, что пользователь лайкнул карточку
    const liked = cardData.likes.some((like) => like._id === userId);
    if (liked) {
      likeButton.classList.add("card__like-button_is-active");
    }
  
  // Слушатель лайка карточки
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

  // Слушатель открытия карточки превью
  elementImage.addEventListener("click", () => {
    openCardPopup(elementImage, elementTitle);
  });
  

  return cardElement;
}

// @todo: Функция удаления карточки
export function deleteCard(cardElem) {
  cardElem.remove();
}