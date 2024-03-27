// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
// @todo: Функция создания карточки
function createCardElement(cardData, deleteCallback)  {
    const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);

    let elementImage = cardElement.querySelector('.card__image');
    let elementTitle = cardElement.querySelector('.card__title');
    let likeButton = cardElement.querySelector('.card__like-button');
    let deleteButton = cardElement.querySelector('.card__delete-button');
    elementImage.src = cardData.link;
    elementImage.alt = cardData.name;
    elementTitle.textContent = cardData.name;

    deleteButton.addEventListener('click', function() {
        // btn = deleteButton.closest('.places__item');
        // btn.remove();
        deleteCard(cardElement);
    });

    return cardElement;
}
// @todo: Функция удаления карточки

function deleteCard(cardElem) {
    cardElem.remove();
};


// @todo: Вывести карточки на страницу

initialCards.forEach(function(item) {
    const cardElem = createCardElement(item, deleteCard);
    placesList.append(cardElem);
});


