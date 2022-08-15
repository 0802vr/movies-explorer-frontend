import "./Movies.css";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SeachForm from "../SeachForm/SeachForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

const Movies = ({
   
  setFilter,
  saveMovie,
  movies,
  savedMovies,
  findMoviesMain,
  findMoviesMainSaved,
  isLoading,
  deleteMovie,
  clearAllErrors,
  setIsLoading
}) => {
  function changeFilter() {
    setFilter();
  }
  const pathname = useLocation();
  useEffect(() => {
    clearAllErrors();
  }, [pathname]);

  const [counter, setCounter] = React.useState(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1279) {
      return 12;
    }
    else if (windowWidth > 800) {
      return 8;
    } 
    else if (windowWidth >= 320) {
      return 5;
    }
  });
  const [preloaderAdd, setPreloaderAdd] = React.useState(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1279) {
      return 3;
    } else if (windowWidth > 800) {
      return 2;
    } else if (windowWidth >= 320) {
      return 1;
    }
  });
  function onChange() {
    const windowWidth = window.innerWidth;
    if (windowWidth > 1279) {
      setCounter(12);
      setPreloaderAdd(3);
    } else if (windowWidth >= 800) {
      setCounter(8);
      setPreloaderAdd(2);
    } else if (windowWidth >= 320) {
      setCounter(5);
      setPreloaderAdd(1);
    }
  }
  useEffect(() => {
    window.addEventListener("resize",  () => {
      setTimeout(onChange, 1000);
  });
  }, []);

  let moviesCounter = movies.slice(0, counter);

  function addMovies() {
    setIsLoading(true);
    setCounter((i) => i + preloaderAdd);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }
   
  return (
    <div className="movies">
      <SeachForm
        changeFilter={changeFilter}
        findMoviesMain={findMoviesMain}
        findMoviesMainSaved={findMoviesMainSaved}
        isMain={true}
      
      />
      <MoviesCardList
        movies={moviesCounter}
        savedMovies={savedMovies}
        isLoading={isLoading}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}         
        addMovies={addMovies}
        isMain={true}
      />
       
        <Preloader  isLoading={isLoading}  />
     {movies || savedMovies ? (<div className={movies.length === moviesCounter.length ?  "movies_cards__button-container_display_none" : "movies_cards__button-container"}>
          <button
            className="movies_cards__button"
            type="button"
            onClick={addMovies} 
          >
            Ещё
          </button>
        </div>): null}
        
      
    </div>
  );
};
export default Movies;
