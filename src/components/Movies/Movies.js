import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect } from "react";
import * as utils from "../../utils/utils";

function Movies(props) {
  const [movieSearch, setMovieSearch] = useState("");
  const [filterCheck, setFilterCheck] = useState(false);
  const [moviesAmount, setMoviesAmount] = useState(utils.getMoviesAmount());
  const [allMovies, setAllMovies] = useState([]);
  const [currentMovies, setCurrentMovies] = useState([]);

  const handleSearchSubmit = (value) => {
    setMovieSearch(value);
    if (!props.cards.length) {
      props.onGetCards();
    }
  };

  const handleFilerToggle = () => {
    setFilterCheck(!filterCheck);
  };

  const handleClickMoreButton = () => {
    setMoviesAmount(moviesAmount + utils.getMoreMovies());
  };

  useEffect(() => {
    const foundMovies = utils.searchMovie(props.cards, movieSearch);
    const filteredMovies = utils.filterShortMovies(foundMovies, filterCheck);
    setAllMovies(filteredMovies);
    setCurrentMovies(filteredMovies.slice(0, moviesAmount));
  }, [props.cards, movieSearch, filterCheck, moviesAmount]);

  useEffect(() => {
    const updateWindowWidth = () => {
      setTimeout(() => {
        setMoviesAmount(utils.getMoviesAmount());
        setCurrentMovies(allMovies.slice(0, utils.getMoviesAmount()));
      }, 1000);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, [allMovies]);

  return (
    <>
      <Header navbar="logged" loggedIn={props.loggedIn} />
      <SearchForm
        onSearchSubmit={handleSearchSubmit}
        onFilterCheck={filterCheck}
        handleToggle={handleFilerToggle}
      />

      {props.isLoading && <Preloader />}

      <MoviesCardList
        cards={currentMovies}
        moreCards={currentMovies.length < allMovies.length}
        onClickMoreCardsButton={handleClickMoreButton}
        onCardClickButton={props.onCardClickButton}
        searchError={props.searchError}
      />
      <Footer />
    </>
  );
}

export default Movies;
