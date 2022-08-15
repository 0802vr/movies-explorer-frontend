import "./SeachForm.css";
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

const SeachForm = ({changeFilter, findMoviesMain, findMoviesMainSaved, isMain}) => {

    const [form, setForm] = useState(true);
    const [text, setText] = useState("");
    
    function handleChangeInput(e) {
        setText(e.target.value);
        setForm(e.target.checkValidity());
    }
    function handleFindMainMovies(e) {
        e.preventDefault();
        findMoviesMain(text);
        
         
               
    }
    function handleFindMainSavedMovies(e) {
        e.preventDefault();
        findMoviesMainSaved(text);
        
        
    }
    function handleChangeFilter() {
      changeFilter();
  }
    
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/movies'){let findText = JSON.parse(localStorage.getItem("text")) 
    setText(findText);}
      
  }, [setText]); 
  return (
    <section className="search">
      <form className="search__form" onSubmit={isMain ? handleFindMainMovies : handleFindMainSavedMovies}>
        <div className="search__icon"></div>
        <input
          className="search__input"
          type="text"
          name="name"
          onChange={handleChangeInput}      
          value={text}
          required
        />
        <span className="search-form__err">{form ? "" : "Введите ключевое слово"}</span>
        <button className="search__button"  disabled={!form}  type="submit"> Найти</button>        
      </form>
      <div className="search__change">
        <label className="search__switch">
          <input type="checkbox" onClick={handleChangeFilter} className="search__checkbox" />
          <span className="search__slider" />
        </label>
        <p className="search__movies">Короткометражки</p>
      </div>
    </section>
  );
};
export default SeachForm;
