import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import React from "react";
import {useLocation} from "react-router-dom";
const MoviesCardList = ({
  movies,
  savedMovies,
  isLoading,
  saveMovie,
  deleteMovie,
  isMain,
  addMovies 
}) => {
 /* const pathname = useLocation();
   function getAddCard (props){
    if (pathname === "/movies")      
        
        return props.addMovies 
  } */
  return (
    <section className="movies_cards">
      <div className="cards__items">
        {movies.map((card) => (
          <MoviesCard
            key={isMain ? card.movieId : card.id}
            card={card}
            isMain={isMain}
            savedMovies={savedMovies}
            deleteMovie={deleteMovie}
            saveMovie={saveMovie}
          />
        ))}
      </div>

      {isLoading ? (
        <Preloader />
      ) : (
        <div className="movies_cards__button-container">
          <button
            className="movies_cards__button"
            type="button"
            onClick={addMovies} 
          >
            Ещё
          </button>
        </div>
      )}
    </section>
  );
};
export default MoviesCardList;
