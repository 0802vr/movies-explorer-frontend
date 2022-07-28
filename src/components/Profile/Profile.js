import "./Profile.css";
import { NavLink } from "react-router-dom";
const Profile = () => {
  return (
    <section className="profile">
      <h2 className="profile__title">Привет, Василий!</h2>
      <label className="profile__item">
        <p className="profile__item-text">Имя</p>
        <input className="profile__input" type="text" defaultValue="Василий" required />         
      </label>
      <label className="profile__item">
        <p className="profile__item-text">E-mail</p>
        <input
          className="profile__input"
          type="email"
          defaultValue="pochta@yandex.ru"
          required
        />         
      </label>
      <NavLink to="/profile" className="profile__btn">Редактировать</NavLink>
        <NavLink to="/" className="profile__link">Выйти из аккаунта</NavLink>
    </section>
  );
};
export default Profile;
