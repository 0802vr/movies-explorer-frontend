import './SavedMovies.css';
import React, { useEffect } from "react";
import SeachForm from '../SeachForm/SeachForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
const SavedMovies = ({
    isFilter,
    setFilter,
    saveMovie,
    movies,
    savedMovies,
    findMoviesMain,
    findMoviesMainSaved,
    isLoading,
    deleteMovie,
    clearAllErrors}) => {
    function changeFilter() {
        setFilter();
    }
    useEffect(() => {
        clearAllErrors();
    }, []);
    return (
        <div className='savedMovies'>  
        <SeachForm 
        changeFilter={changeFilter}
        findMoviesMain={findMoviesMain}
        findMoviesMainSaved={findMoviesMainSaved}
        isMain={false}/>
        <MoviesCardList 
        movies={movies}
        savedMovies={savedMovies}
        isLoading={isLoading}
        saveMovie={saveMovie}
        deleteMovie={deleteMovie}       
        isMain={false}/>
        </div>)
        
    };
export default SavedMovies;