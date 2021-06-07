class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //Статус ответа
  _statusJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //регистрация
  register = (name, email, password) => {
    return fetch(this._baseUrl + "/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password, email }),
    }).then(this._statusJson);
  };

  //авторизация
  login = (email, password) => {
    return fetch(this._baseUrl + "/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(this._statusJson);
  };

  //получение данных юзера
  getUserInfo = (token) => {
    return fetch(this._baseUrl + "/users/me", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(this._statusJson)
      .then((data) => {
        return data;
      });
  };

  //Загрузка карточек
  getUserCards() {
    return fetch(this._baseUrl + "/movies", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._statusJson);
  }

  //Редактирование информации о пользователе
  editUserInfo(userInfo) {
    return fetch(this._baseUrl + "/users/me", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
      }),
    }).then(this._statusJson);
  }

  //Удаление карточки
  deleteCard(movieId) {
    return fetch(this._baseUrl + "/movies/" + movieId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    }).then(this._statusJson);
  }

  // добавление новой карточки
  postCard(movie) {
    return fetch(this._baseUrl + "/movies", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        trailer: movie.trailerLink,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      }),
    }).then(this._statusJson);
  }
}

const api = new MainApi({
  baseUrl: "http://localhost:3000",
});

export default api;
