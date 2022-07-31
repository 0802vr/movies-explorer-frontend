const BASE_URL = " https://api.mov.nomoredomains.xyz";

const handleRes = (res) => {
  if (res.ok) return res.json();
  else
    return Promise.reject(
      `Ошибка: ${res.status}`,
      alert(`Ошибка: ${res.status}`)
    );
};

//регистрация пользователя обязательно имя почта пароль
export const register = ({ email, password, name }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email, name: name }),
  }).then((res) => handleRes(res));
};

//логирование пользователя только пароль и почта
export const login = ({ email, password }) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password: password, email: email }),
  }).then((res) => handleRes(res));
};

//получение данных о пользователе на вкладке профиля
export const getUser = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleRes(res));
};

//изменение данных профиля, нужен токен
export const updateUser = ({ name, email }) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({ name: name, email: email }),
  }).then((res) => handleRes(res));
};

//запрос по сохраненным карточкам
export const getSavedMovies = (token) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => handleRes(res));
};

//создание новой карточки, body перенести из express
export const saveMovie = ({ token, movie }) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: movie.image,
      trailerLink: movie.trailer,
      thumbnail: movie.thumbnail,
      movieId: String(movie.movieId),
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
  }),
  }).then((res) => handleRes(res));
};

//удаление карточки по id
export const deleteSavedMovie = ({ token, id }) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }).then((res) => handleRes(res));
};
