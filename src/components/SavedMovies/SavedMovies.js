import './SavedMovies.css';
import React, { useEffect } from "react";
import SeachForm from '../SeachForm/SeachForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
const SavedMovies = ({
    isFilterSave,
    setFilterSave,
    saveMovie,
    movies,
    savedMovies,
    findMoviesMain,
    findMoviesMainSaved,
    isLoading,
    deleteMovie,
    clearAllErrors}) => {
    function changeFilter() {
        setFilterSave();
    }
    useEffect(() => {
        clearAllErrors();
    }, []);
    return (
        <div className='savedMovies'>  
        <SeachForm 
        changeFilter={changeFilter}
        isFilterSave={isFilterSave}
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