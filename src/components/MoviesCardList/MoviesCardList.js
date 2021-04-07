import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  const cardsAmount = props.cards.length > 0;

  return (
    <section className="movies-list movies">
      {!cardsAmount && (
        <p className="movies-list__message">{props.searchError}</p>
      )}

      {cardsAmount && (
        <ul className="movies-list__ul">
          {props.cards.map((card) => (
            <MoviesCard
              card={card}
              key={card._id}
              onCardClickButton={props.onCardClickButton}
            />
          ))}
        </ul>
      )}
      {props.moreCards && (
        <div className="movies-list__button-container">
          <button
            className="movies-list__button"
            type="button"
            name="more"
            onClick={props.onClickMoreCardsButton}
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
