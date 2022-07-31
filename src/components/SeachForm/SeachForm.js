import "./SeachForm.css";
import React, { useState } from "react";

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
        setText("");
    }
    function handleFindMainSavedMovies(e) {
        e.preventDefault();
        findMoviesMainSaved(text);
        setText("");
    }
    function handleChangeFilter() {
      changeFilter();
  }
  return (
    <section className="search">
      <form className="search__form" onSubmit={isMain ? handleFindMainMovies : handleFindMainSavedMovies}>
        <div className="search__icon"></div>
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
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
