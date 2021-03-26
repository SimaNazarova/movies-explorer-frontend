import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import images from "../../utils/movies";

function importAll(item) {
  return item.keys().map(item);
}

const posters = importAll(
  require.context("../../images/movies", false, /\.(png|jpe?g|svg)$/)
);

const postersArray = posters.map((image) => image.default);

const moviesArray = images.map((movie, index) => {
  const card = { ...movie, image: postersArray[index] };

  return card;
});

export const likedMovies = moviesArray.filter(
  (movie) => movie.isLiked === true
);

function Movies() {
  return (
    <>
      <Header navbar="white" />
      <SearchForm />
      {/* <Preloader/>  */}
      <MoviesCardList movies={moviesArray} />
      <Footer />
    </>
  );
}

export default Movies;
