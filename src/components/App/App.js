/* eslint-disable react-hooks/exhaustive-deps */
import { withRouter, Route, useHistory, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import { useState, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as utils from "../../utils/utils";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [movies, setMovies] = useState([]);

  const path = useLocation().pathname;

  const history = useHistory();

  // открытие попапа
  const handleInfoTooltipOpen = () => {
    setIsPopupOpen(true);
  };

  //закрытие попапа
  const handleInfoTooltipClose = () => {
    setIsPopupOpen(false);
  };

  // проверка токена
  useEffect(() => {
    function tokenCheck() {
      if (localStorage.getItem("jwt")) {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
          setToken(jwt);
          return mainApi
            .getUserInfo(jwt)
            .then((res) => {
              if (res) {
                setLoggedIn(true);
                history.push(path);
              }
            })
            .catch((err) => {
              if (err === "400") {
                return console.log(
                  "Токен не передан или передан не в том формате"
                );
              }
              if (err === "401") {
                return console.log("Переданный токен некорректен ");
              }
            });
        }
      }
    }
    tokenCheck();
  }, [history]);

  //загрузка данных юзера и сохраненных фильмов
  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(token), mainApi.getUserCards(token)])
        .then(([userData, movies]) => {
          setCurrentUser({ email: userData.email, name: userData.name });
          setSavedMovies(movies.reverse());
          localStorage.setItem("saved-movies", JSON.stringify(movies));
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn, token]);

  //регистрация
  const handleRegister = (name, email, password) => {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        if (err === "400") {
          return console.log("некорректно заполнено одно из полей ");
        }
      });
  };

  //авторизация
  const handleLogin = (email, password) => {
    mainApi
      .login(email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          localStorage.setItem("jwt", res.token);
          setLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch((err) => {
        handleInfoTooltipOpen();
        setInfoTooltipMessage("Что-то пошло не так. Попробуйте еще раз");
        console.log(err);
      });
  };

  //обновление данных юзера
  function handleUpdateUser({ name, email }) {
    mainApi
      .editUserInfo({ name, email })
      .then((res) => {
        setCurrentUser(res);
        setIsPopupOpen(true);
        handleInfoTooltipOpen();
        setInfoTooltipMessage("Изменения успешно сохранены");
      })
      .catch((err) => {
        console.log("Произошла ошибка:", err);
      });
  }

  //выход из профиля
  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    history.push("/");
    setLoggedIn(false);
  };

  // загрузка всех фильмов
  function getAllMovies() {
    setIsLoading(true);
    moviesApi
      .getMovies()
      .then((movies) => {
        localStorage.setItem("all-movies", JSON.stringify(movies));
        setMovies(utils.checkSavedMovies(movies, savedMovies));
        setSearchError("Ничего не найдено");
      })
      .catch((err) => {
        setSearchError(
          "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  // добавление в сохраненные
  function handleSaveCard(movie) {
    mainApi
      .postCard(movie)
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // удвление из сохраненных
  function handleDeleteCard(movie) {
    const movieId = movie.id || movie.movieId;
    const likedMovie = savedMovies.find(
      (savedMovie) => savedMovie.movieId === movieId
    );
    mainApi
      .deleteCard(likedMovie._id)
      .then(() => {
        const newSavedMovies = savedMovies.filter(
          (savedMovie) => savedMovie.movieId !== movieId
        );
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // добавление и удаление из сохраненных
  function handleCardClickButton(movie) {
    if (!movie.isSaved && !movie._id) {
      handleSaveCard(movie);
    } else {
      handleDeleteCard(movie);
    }
  }

  //загрузка всех всех фильмов
  useEffect(() => {
    const allMovies = JSON.parse(localStorage.getItem("all-movies"));
    if (allMovies) {
      setMovies(utils.checkSavedMovies(allMovies, savedMovies));
      setSearchError("Ничего не найдено");
    } else {
      setSearchError("Начните поиск");
      setMovies([]);
    }
  }, [savedMovies]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="App-page">
          <Switch>
            <Route exact path="/">
              <Main loggedIn={loggedIn} />
            </Route>

            <ProtectedRoute
              path="/movies"
              loggedIn={loggedIn}
              component={Movies}
              onGetCards={getAllMovies}
              isLoading={isLoading}
              searchError={searchError}
              cards={movies}
              onCardClickButton={handleCardClickButton}
            />

            <ProtectedRoute
              path="/saved-movies"
              loggedIn={loggedIn}
              component={SavedMovies}
              isLoading={isLoading}
              savedMovies={savedMovies}
              onCardClickButton={handleCardClickButton}
            />

            <ProtectedRoute
              path="/profile"
              loggedIn={loggedIn}
              component={Profile}
              handleSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              onInfoTooltip={handleInfoTooltipOpen}
            />

            <Route path="/sign-in">
              <Login
                onLogin={handleLogin}
                onInfoTooltip={handleInfoTooltipOpen}
              />
            </Route>

            <Route path="/sign-up">
              <Register onRegister={handleRegister} />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
        <InfoTooltip
          isOpen={isPopupOpen}
          onClose={handleInfoTooltipClose}
          infoTooltipMessage={infoTooltipMessage}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
