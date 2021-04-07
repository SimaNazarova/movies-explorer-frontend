import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__projects">
        <h4 className="portfolio__subtitle">Статичный сайт</h4>
        <a
          href="https://simanazarova.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer oopener"
        >
          {" "}
          <img src={arrow} className="portfolio__arrow-link" alt="стрелка" />
        </a>
      </div>

      <div className="portfolio__projects">
        <h4 className="portfolio__subtitle">Адаптивный сайт</h4>
        <a
          href="https://simanazarova.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer oopener"
        >
          {" "}
          <img src={arrow} className="portfolio__arrow-link" alt="стрелка" />
        </a>
      </div>

      <div className="portfolio__projects">
        <h4 className="portfolio__subtitle">Одностраничное приложение</h4>
        <a
          href="https://sn.mesto.students.nomoredomains.icu/"
          target="_blank"
          rel="noreferrer oopener"
        >
          {" "}
          <img src={arrow} className="portfolio__arrow-link" alt="стрелка" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
