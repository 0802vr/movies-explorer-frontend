import "./SeachForm.css";

const SeachForm = () => {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__icon"></div>
        <input
          className="search__input"
          type="text"
          placeholder="Фильм"
          required
        />
        <button className="search__button" type="submit"> Найти</button>
      </form>
      <div className="search__change">
        <label className="search__switch">
          <input type="checkbox" className="search__checkbox" />
          <span className="search__slider" />
        </label>
        <p className="search__movies">Короткометражки</p>
      </div>
    </section>
  );
};
export default SeachForm;
