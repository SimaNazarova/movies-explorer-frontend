import photo from "../../images/photo.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="about-me main" id="aboutMe">
      <h2 className="main__title">Студент</h2>
      <div className="about-me__content">
        <div className="about-me__container">
          <h3 className="about-me__name">Серафима</h3>
          <h4 className="about-me__about">Фронтенд-разработчик, 28 лет</h4>
          <p className="about-me__text">
            Я родилась и живу в Москве, закончила факультет менеджмента МФЮА.
            Большую часть времени работала администратором в гостинице. В
            свободное время люблю читать книги по архитиктуре и культуре, и
            собирать пазлы. Год назад открыла для себя программирование. В итоге
            праздный интерес перерос в серьезное увлечение.
          </p>

          <ul className="about-me__link-ul">
            <li className="about-me__link-li">
              <a
                className="about-me__link"
                href="https://github.com/SimaNazarova"
              >
                Github
              </a>
            </li>
            <li className="about-me__link-li">
              <a className="about-me__link" href="https://vk.com/id76644845">
                VK
              </a>
            </li>
          </ul>
        </div>
        <img alt="фото" src={photo} className="about-me__photo" />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
