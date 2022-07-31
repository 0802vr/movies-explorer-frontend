import "./Form.css";
import { Link } from "react-router-dom";
import logo from '../../image/save_logo.svg'

function Form(props) {

  const { title, submit, text, path, link, children, films, path_err, handleClearErrors,isValid, onSubmit } = props;
  return (
  <section className="form">
    <div className="form__box">
      <Link to="/" className="form__link">
        <img className="form__img" src={logo} alt="logo movies"></img>
      </Link>

      <h2 className="form__title">{title}</h2>

      <form className="form__box" onSubmit={onSubmit}  >
        <div className="form__items"> {children} </div>
        <button type="submit" className={isValid ? "form__button" : "form__button_type_disable"} >
          {submit}
        </button>
      </form>

      <p className="form__text">
        {text}
        <Link to={path} className="form__link" onClick={handleClearErrors}>
          {link}
        </Link>
      </p>
       
        <Link to={path_err}>
          {films}
        </Link>
       
    </div>
  </section>
  );
}
export default Form;
