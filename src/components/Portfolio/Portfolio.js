import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__table">
        <li className="portfolio__table_list">
          <a className="portfolio__link"  href="https://github.com/0802vr/how-to-learn" alt="line">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__table_list">
          <a className="portfolio__link"  href="https://github.com/0802vr/russian-travel" alt="line">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__table_list">
          <a className="portfolio__link"  href="https://github.com/0802vr/mesto" alt="line">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Portfolio;
