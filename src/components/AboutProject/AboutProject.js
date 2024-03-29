import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about" id="about-project">
      <h2 className="about__title"> О проекте</h2>
      <div className="about__box">
        <div className="about__info">
          <h3 className="about__info-title">Дипломный проект включал 5 этапов</h3>
          <p className="about__info-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about__info">
          <h3 className="about__info-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__info-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="about__box">
          <div className="about__counter">
        <h4 className="about__counter-title">1 неделя</h4>
        <p className="about__counter-text">Back-end</p>
          </div>
          <div className="about__counter">
        <h4 className="about__counter-title about__counter-title_type_nogreen">4 недели</h4>
        <p className="about__counter-text">Front-end</p>
          </div>
      </div>
    </section>
  );
};
export default AboutProject;
