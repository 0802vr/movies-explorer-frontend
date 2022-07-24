import './SavedMovies.css';
import savemovies from '../../utils/savemovies';
import SeachForm from '../SeachForm/SeachForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
const SavedMovies = () => {
    return (
        <div className='savedMovies'>  
        <SeachForm />
        <MoviesCardList cards={savemovies}/>
        </div>)
        
    };
export default SavedMovies;