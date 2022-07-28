import './Movies.css';
import SeachForm from '../SeachForm/SeachForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';
const Movies = () => {
   
    return (
        <div className='movies'>  
        <SeachForm />
      <MoviesCardList cards={movies} button={true} />
        </div>);
    };
export default Movies;