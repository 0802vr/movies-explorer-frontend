import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
        <div className="footer__table">
        <p className="footer__copyright">&copy; 2022</p>
        <nav className="footer__navigation">
          <ul className="footer__navigation-items">
            <li className="footer__navigation-item">
              <a className="footer__navigation-link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/web/">Яндекс.Практикум</a>
            </li>
            <li className="footer__navigation-item">
              <a className="footer__navigation-link" target="_blank" rel="noreferrer" href="https://github.com/0802vr">Github</a>
            </li>
            <li className="footer__navigation-item">
              <a className="footer__navigation-link" target="_blank" rel="noreferrer" href="https://vk.com/id124795459">Vkontakte</a>
            </li>
          </ul>
        </nav>
        </div>
        </footer>);
    };
export default Footer;