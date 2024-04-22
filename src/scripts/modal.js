// функция открытия модального окна
export function openPopup(evt) {
  evt.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscKey);
}

// фнкция закрытия модального окна
export function closePopup(evt) {
  evt.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscKey);
}

// Функция обработки нажатия клавиши Esc
function handleEscKey(event) {
  if (event.key == "Escape") {

  const popIsOpen = document.querySelector('.popup_is-opened');
  closePopup(popIsOpen);
  }
}

// Функция закрытия попапа по клику вне его области
export function closeOverlay(evt) {
  if(evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}





