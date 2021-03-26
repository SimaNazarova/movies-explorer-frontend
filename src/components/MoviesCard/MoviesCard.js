import { Route } from "react-router-dom";

function MoviesCard({ card }) {
  return (
    <li className="movie-card">
      <img className="movie-card__image" src={card.image} alt={card.title} />
      <div className="movie-card__content">
        <div className="movie-card__about">
          <h2 className="movie-card__title">{card.title}</h2>
          <p className="movie-card__duration">{card.duration}</p>
        </div>
        <Route path="/movies">
          <button
            className={`movie-card__like-button ${
              card.isLiked && "movie-card__like-button_active"
            }`}
            aria-label="лайк"
          ></button>
        </Route>
        <Route path="/saved-movies">
          <button
            className="movie-card__delete-button"
            aria-label="удалить"
          ></button>
        </Route>
      </div>
    </li>
  );
}

export default MoviesCard;
