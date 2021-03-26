import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <section className="movies-list movies">
      <ul className="movies-list__ul">
        {movies.map((card) => {
          return <MoviesCard card={card} key={card.id} />;
        })}
      </ul>
      <div className="movies-list__button-container">
        {movies.length > 9 && (
          <button aria-label="загрузить" className="movies-list__button">
            Ещё
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
