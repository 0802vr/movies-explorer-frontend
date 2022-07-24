import './Header.css';
import logo from '../../image/save_logo.svg'
import NavAuth from '../NavAuth/NavAuth';
import Navigation from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
const Header = ({ loggedIn }) => {
    return (
        <section className={`${loggedIn ? 'header_type_auth' : 'header'}`}>
        <Link  className='header__link' to="/" >
        <img className='header__img' src={logo} alt='logo'></img>
        </Link>
        {loggedIn ?  <NavAuth /> : <Navigation /> }
        </section>
        );
    };
export default Header;