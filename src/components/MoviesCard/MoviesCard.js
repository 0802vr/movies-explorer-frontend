import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const MoviesCard = ({ card }) => {
  const { pathname } = useLocation();
  const [like, setLike] = useState(false);
  function handleToogle() {
    setLike(!like);
  }
  return (
    <div className="card">
      <div className="card__items">
        <p className="card__title">{card.title}</p>
        <div className="card__btns">
          {pathname === "/saved-movies" ? (
            <button type="button" className="card__btn card__btn_save" />
          ) : (
            <button
              type="button"
              onClick={handleToogle}
              className={`card__btn card__btn${like ? "_like" : "_no_like"}`}
            />
          )}
        </div>
      </div>
      <p className="card__duration">{card.duration}</p>
      <img src={card.image} alt={card.title} className="card__img"></img>
    </div>
  );
};
export default MoviesCard;
