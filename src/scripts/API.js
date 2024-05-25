import { checkResponse } from "./utils";

export const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-13",
  headers: {
    authorization: "8af40eef-5f1c-4b27-bd00-2a1549cfa2de",
    "Content-Type": "application/json" 
  }
};

export const getAllCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers
  })
  .then(checkResponse)
}

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers
  })
  .then(checkResponse)
}

export const updateUserData = (data) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: data.name,
      about: data.about
    })
  })
  .then(checkResponse)
}

export const addCardDate = (data) => {
  return fetch(`${config.baseUrl}/cards`,{
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    })
  })
  .then(checkResponse)
}

export const deleteCardApi = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers
  })
  .then(checkResponse)
}

export const likeButtonApi = (userId) => {
  return fetch(`${config.baseUrl}/cards/likes/${userId}`, {
    method: "PUT",
    headers: config.headers,
  })
  .then(checkResponse)
}

export const delBtnApi = (userId) => {
  return fetch(`${config.baseUrl}/cards/likes/${userId}`, {
    method: "DELETE",
    headers: config.headers,
  })
  .then(checkResponse)
}

export const changeAvatarApi = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar
    })
  })
  .then(checkResponse)
}


