import './Promo.css';

import logo from '../../image/logo.svg'

const Promo = () => {
    return (
        <section className='promo'>
           <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1> 
           <img className='promo__img' src={logo} alt='logo-promo'></img>
        </section>
        );
    };
export default Promo;