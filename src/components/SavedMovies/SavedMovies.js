import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { likedMovies } from "../Movies/Movies";

function SavedMovies() {
  return (
    <>
      <Header navbar="white" />
      <SearchForm />
      {/* <Preloader/> */}
      <MoviesCardList movies={likedMovies} />
      <Footer />
    </>
  );
}

export default SavedMovies;
