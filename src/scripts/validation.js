export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'button_inactive',
    inputErrorClass: 'form__input_type_error',
    errorClass: '.form__input-error'
  };

export const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll('.popup__form'));
  
    formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
  
      setEventListeners(formElement);
  });
  };

  const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add('form__input_type_error');
    errorElement.textContent = errorMessage;
    errorElement.classList.add('form__input-error_active');
  };

  export const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove('form__input_type_error');
    errorElement.classList.remove('form__input-error_active');
    errorElement.textContent = '';
  };

  const checkInputValidity = (formElement, inputElement) => {
    if(inputElement.validity.patternMismatch) {
      inputElement.setCustomValidity(inputElement.dataset.errorMessage);
    } else {
      inputElement.setCustomValidity("");
    }
  
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
  };

  const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.popup__button');
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
    toggleButtonState(inputList, buttonElement);
  };

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  });
  };
  
  function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.disabled = true;  
      buttonElement.classList.add('button_inactive');
  } else {
      buttonElement.classList.remove('button_inactive');
      buttonElement.disabled = false;
  }
  };

  export function clearValidation(formElement, validationConfig) {
    const inputsError = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    inputsError.forEach((inputElement)=> {
      hideInputError(formElement, inputElement);
    })
  
    const inputList = Array.from(formElement.querySelectorAll(validationConfig.inputSelector));
    const buttonElement = formElement.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement);
  };
  
  