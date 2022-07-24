import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <section className="page_not_found">
            <h2 className="page_not_found__title">404</h2>
            <h3 className="page_not_found__subtitle">Страница не найдена</h3>
            <Link to="/" className="page_not_found__link">
             Назад
            </Link>
        </section>);
    };
export default PageNotFound;