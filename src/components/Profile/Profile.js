
import React from "react";
import { useState, useContext } from 'react';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { useFormWithValidation } from "../../utils/useFormWithValidation";

import "./Profile.css";
const Profile = ({changeProfile, handleLogout, setProfileError, profileError}) => {

   const currentUser = useContext(CurrentUserContext);

  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useFormWithValidation();
  function handleSubmit(e) {
    e.preventDefault();
    if (currentUser.name === values.name && currentUser.email === values.email ){
      return alert("Вы не изменили имя или почту")
    }
     
    if(values.name === undefined){
       
    return  changeProfile({ email: values.email, name: currentUser.user.name });
    }
    if(values.email === undefined){
    return  changeProfile({ email: currentUser.user.email, name: values.name });
    }
    changeProfile({ email: values.email, name: values.name });
    
    
  }
  
  const [name, setName] = useState(currentUser.name);   
  const [email, setEmail] = useState(currentUser.email);

  function handleClickSignOut() {
    resetForm();
    handleLogout();
  }
  function handleChangeInputName(e) {
    handleChange(e);
    const value = e.target.value;
    
    setName(value)
      if (profileError.length > 0) {
      setProfileError("");
    }  
    
  }
  function handleChangeInputEmail(e) {
    handleChange(e);
    const value = e.target.value;
    setEmail(value)
      if (profileError.length > 0) {
      setProfileError("");
    }  
    
  }
   React.useEffect(() => {
    setEmail(currentUser.email)
    setName(currentUser.name)
    setValues(currentUser) 
  }, [currentUser, setValues]); 
   
  

  return (
    <section className="profile">       
      <form className="profile__form" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, {name}!</h2>       
      <label className="profile__item">
        <p className="profile__item-text">Имя</p>
        <input
          className="profile__input"
          type="text"
          name="name"
          pattern="[а-яА-Яa-zA-ZёË\- ]{1,}"
          value={name}
          minLength="2"         
          onChange={handleChangeInputName}           
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
          value={email}          
          onChange={handleChangeInputEmail}               
          required
        /> 
        
      </label>
      <p className="form__error {errors.email ? form__error-text : null }">{errors.email}</p>
      
      <button  className={`${isValid ? 'profile__btn' : 'profile__btn_type_disable'}`} type="submit" disabled={!isValid}>
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
