import "./MoviesCard.css";
import React from "react";
import { useState } from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";
const MoviesCard = ({ card, isMain, savedMovies, deleteMovie, saveMovie }) => {
  const currentUser = React.useContext(CurrentUserContext);
  const newMovie = savedMovies.find((item) => item.movie.nameRU === card.nameRU && item.movie.owner === currentUser._id);
  const movie = {
      country: card.country || 'нет',
      director: card.director || 'нет',
      duration: card.duration || 0,
      year: card.year || 'нет',
      description: card.description || 'нет',
      image: isMain ?   `https://api.nomoreparties.co${card.image.url}` : card.image,
      trailer: isMain ?   card.trailerLink : card.trailer,
      thumbnail: isMain ?  `https://api.nomoreparties.co${card.image.formats.thumbnail.url}` : card.thumbnail ,
      movieId: isMain ? card.id : card._id,
      nameRU: card.nameRU || 'Нет',
      nameEN: card.nameEN || 'Нет',
  }
  
  
   
  const [like, setLike] = useState(false);

   
  function likeCard(e) {
    if (like) {
        const searchMovie = savedMovies.find((movie) => movie.movie.movieId === String(card.id));         
        deleteMovie(searchMovie.movie._id); 
    }
    else {

      saveMovie(movie);
    }
    setLike(!like);
}

  function deleteCard(e) {
     
   deleteMovie(card.movie._id); 
    
}
React.useEffect(() => {
  if (newMovie) {
      setLike(true);
  }
}, [newMovie])
 
function TimeCounter(count){
  const hours = Math.floor(count / 60);
  const minutes = Math.floor(count - (hours * 60));
  return `${hours > 0 ? (hours + ' ч : ' + minutes + ' мин') : (minutes + ' мин')}`;
}
 
  return (
    <div className="card" id={isMain ?  card.id :  card.movie._id}>
      <div className="card__items">
        <p className="card__title">{isMain? card.nameRU : card.movie.nameRU}</p>
        <div className="card__btns">
          {!isMain ? (
            <button type="button" onClick={deleteCard} className="card__btn card__btn_save" />
          ) : (
            <button
              type="button"
              onClick={likeCard}
              className={`card__btn card__btn${like ? "_like" : "_no_like"}`}
            />
          )}
        </div>
      </div>
      <p className="card__duration">{isMain ? TimeCounter(card.duration) : TimeCounter(card.movie.duration)}</p>
      <a className="card__lick" href={isMain ?  card.trailerLink : card.movie.trailerLink}
        target="_blank" rel="noreferrer">
      <img  src={!isMain ? card.movie.image : `https://api.nomoreparties.co${card.image.url}`} alt={card.nameRU} className="card__img"></img></a>
    </div>
  );
};
export default MoviesCard;
