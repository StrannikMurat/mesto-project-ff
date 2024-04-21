// функция открытия модального окна
export function openPopup(evt) {
  evt.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscKey);
}

// фнкция закрытия модального окна
export function closedPopup(evt) {
  evt.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscKey);
}

// Функция обработки нажатия клавиши Esc
function handleEscKey(event) {
  if (event.key == "Escape") {

   const modWin = Array.from(document.querySelectorAll('.popup'));
   const openPop = modWin.find((openedItem)=> {
    return openedItem.classList.contains('popup_is-opened');
   });
   closedPopup(openPop);
  }
}

// Функция закрытия попапа по клику вне его области
export function closeOverlay(evt) {
  if(evt.target.classList.contains('popup')) {
    closedPopup(evt.target);
  }
}





