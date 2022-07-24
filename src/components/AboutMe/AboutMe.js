import "./AboutMe.css";
import photo from '../../image/photo.jpg'
const AboutMe = () => {
  return (
    <section className="about_me" id="student">
      <h2 className="about__title"> Студент</h2>
      <div className="about_me__box">
        <div>
          <h3 className="about_me__title">Виталий</h3>
          <p className="about_me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about_me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <ul className="about-me__links">
            <li className="about-me__link">Facebook</li>
            <li className="about-me__link">Github</li>
          </ul>
        </div>
        <div>
          <img  className="about-me__img" src={photo} alt="photo_vitali"></img>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
