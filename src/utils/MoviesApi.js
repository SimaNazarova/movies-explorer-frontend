export const baseMoviesUrl = "https://api.nomoreparties.co";

class MoviesApi {
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

  //Загрузка данных  с  beatfilm-movies
  getMovies() {
    return fetch(this._baseUrl + "/beatfilm-movies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(this._statusJson);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: baseMoviesUrl,
});

export default moviesApi;
