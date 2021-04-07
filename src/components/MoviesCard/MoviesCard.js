import { useLocation } from "react-router-dom";

function MoviesCard(props) {
  const location = useLocation();

  const moviesPath = location.pathname === "/movies";
  const savedMoviesPath = location.pathname === "/saved-movies";

  const cardLikeButtonClassName = `movie-card__like-button ${
    props.card.isSaved ? "movie-card__like-button_active" : ""
  }`;

  function handleCardClickButton() {
    props.onCardClickButton(props.card);
  }

  // конвертация времени
  function durationСonvert() {
    const { duration } = props.card;
    return `${Math.floor(duration / 60) || 0}ч ${Math.floor(duration % 60)}м`;
  }

  function getImageLink(card) {
    if (card.image && card.image.url) {
      return `https://api.nomoreparties.co${card.image.url}`;
    }
    if (card.image) {
      return card.image;
    } else {
      return "https://st.kp.yandex.net/images/movies/poster_none.png";
    }
  }

  return (
    <li className="movie-card">
      <a
        href={props.card.trailer || props.card.trailerLink}
        target="_blank"
        rel="noreferrer oopener"
      >
        <img
          className="movie-card__image"
          src={getImageLink(props.card)}
          alt={props.card.nameRU}
        />
      </a>
      <div className="movie-card__content">
        <div className="movie-card__about">
          <h2 className="movie-card__title">{props.card.nameRU}</h2>
          <p className="movie-card__duration">
            {durationСonvert(props.card.duration)}
          </p>
        </div>
        {moviesPath && (
          <button
            onClick={handleCardClickButton}
            className={cardLikeButtonClassName}
            aria-label="лайк"
          ></button>
        )}
        {savedMoviesPath && (
          <button
            onClick={handleCardClickButton}
            className="movie-card__delete-button"
            aria-label="удалить"
          ></button>
        )}
      </div>
    </li>
  );
}

export default MoviesCard;
