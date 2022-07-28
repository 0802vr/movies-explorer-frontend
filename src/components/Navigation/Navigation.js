import './Navigation.css';
import { Link } from 'react-router-dom';
 
const Navigation  = () => {
    return (
        <nav className="nav">
         <ul className="nav__items">
             <li className="nav__item">
             <Link to="/signup" className="nav-item__link nav-item__link_type_signup">Регистрация</Link></li>
             <li className="nav__item">
             <Link to="/signin" className="nav-item__link nav-item__link_type_signin">Войти</Link></li>
         </ul>
        </nav>
        );
    };
export default Navigation;