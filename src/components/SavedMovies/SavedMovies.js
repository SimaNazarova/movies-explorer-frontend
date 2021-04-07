import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import * as utils from "../../utils/utils";

const SavedMovies = (props) => {
  const [movieSearch, setMovieSearch] = useState("");
  const [filterCheck, setFilterCheck] = useState(false);
  const [movies, setMovies] = useState(props.savedMovies);

  const handleSearchSubmit = (value) => {
    setMovieSearch(value);
  };

  const handleFilerToggle = () => {
    setFilterCheck(!filterCheck);
  };

  useEffect(() => {
    const foundMovies = utils.searchMovie(props.savedMovies, movieSearch);
    const filteredMovies = utils.filterShortMovies(foundMovies, filterCheck);
    setMovies(filteredMovies);
  }, [props.savedMovies, movieSearch, filterCheck]);

  return (
    <>
      <Header navbar="logged" loggedIn={props.loggedIn} />
      <SearchForm
        onSearchSubmit={handleSearchSubmit}
        onFilterCheck={filterCheck}
        handleToggle={handleFilerToggle}
      />

      <MoviesCardList
        cards={movies}
        onCardClickButton={props.onCardClickButton}
        searchError={
          props.savedMovies.length < 1
            ? "Нет сохраненных фильмов"
            : "Ничего не найдено"
        }
      />
      <Footer />
    </>
  );
};

export default SavedMovies;
