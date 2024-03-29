import "./Form.css";
import { Link } from "react-router-dom";
import logo from '../../image/save_logo.svg'

function Form(props) {

  const { title, submit, text, path, link, children, films, path_err } = props;
  return (
  <section className="form">
    <div className="form__box">
      <Link to="/" className="form__link">
        <img className="form__img" src={logo} alt="logo movies"></img>
      </Link>

      <h2 className="form__title">{title}</h2>

      <form className="form__box">
        <div className="form__items"> {children} </div>
        <button type="submit" className="form__button" >
          {submit}
        </button>
      </form>

      <p className="form__text">
        {text}
        <Link to={path} className="form__link">
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
