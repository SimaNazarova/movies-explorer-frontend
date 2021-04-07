export const getMoviesAmount = () => {
  if (window.innerWidth <= 639) {
    return 5;
  } else if (window.innerWidth <= 1080) {
    return 8;
  } else {
    return 12;
  }
};

export const getMoreMovies = () => {
  if (window.innerWidth <= 1080) {
    return 2;
  } else {
    return 3;
  }
};

export const searchMovie = (movies, searchWord) =>
  movies.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(searchWord.toLowerCase());
  });

export const checkSavedMovies = (allMovies, savedMovies) => {
  savedMovies.forEach((savedMovie) => {
    const movie = allMovies.find((item) => item.nameRU === savedMovie.nameRU);
    movie.isSaved = true;
  });
  return allMovies;
};

export const filterShortMovies = (movies, checked) => {
  return movies.filter((movie) => (checked ? movie.duration <= 40 : Number));
};
