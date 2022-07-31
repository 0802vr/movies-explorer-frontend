
import React from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

import "./Profile.css";
const Profile = ({changeProfile, handleLogout, setProfileError, profileError}) => {

  const currentUser = React.useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();
  function handleSubmit(e) {
    e.preventDefault();
    if (currentUser.name === values.name && currentUser.email === values.email ){
      return alert("Вы не изменили имя или почту")
    }
    changeProfile({ email: values.email, name: values.name });
    resetForm();
  }
  function handleClickSignOut() {
    resetForm();
    handleLogout();
  }
  function handleChangeInput(e) {
    handleChange(e);
      if (profileError.length > 0) {
      setProfileError("");
    }  
  }
  React.useEffect(() => {
     setValues(currentUser) 
  }, [currentUser, setValues]); 

  return (
    <section className="profile">
      <span className="profile__error_span">{profileError}</span>
      <form className="profile__form" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, {currentUser.name || "обнови страницу"}!</h2>
       
      <label className="profile__item">
        <p className="profile__item-text">Имя</p>
        <input
          className="profile__input"
          type="text"
          name="name"
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
          value={values.name  || ""}
          onChange={handleChangeInput}           
          required
        /> 
        
      </label>
      <p className="form__error {errors.name ? form__error-text : null }">{errors.name}</p>
      <label className="profile__item">
        <p className="profile__item-text">E-mail</p>
        <input
          className="profile__input"
          type="email"
          name="email"   
          pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          value={values.email  || ""}
          onChange={handleChangeInput}               
          required
        /> 
        
      </label>
      <p className="form__error {errors.email ? form__error-text : null }">{errors.email}</p>
      
      <button  className="profile__btn" type="submit">
        Редактировать
      </button>
      <button  className="profile__link" type="submit" onClick={handleClickSignOut}>
        Выйти из аккаунта
      </button>
      </form>
      
    </section>
  );
};
export default Profile;
