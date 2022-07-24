import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import React, { useState } from 'react';
const MoviesCardList = ({ cards, button }) => {

    const [isLoading, setLoading] = useState(false);

    const handlePreloader = () => {
        setLoading(true);
      };
     
    return (
        <section className="movies_cards">
          <div className="cards__items">
            {cards.map((card) => (
              <MoviesCard key={card.id} card={card} />
            ))}
          </div>
    
          {isLoading ? (
            <Preloader />
          ) : (
            button && (
              <div className="movies_cards__button-container">
                <button className="movies_cards__button" type="button" onClick={handlePreloader}>Ещё</button>
              </div>
            )
          )}
        </section>
      );
    };
export default MoviesCardList;