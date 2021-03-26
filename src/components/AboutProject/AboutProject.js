function AboutProject() {
  return (
    <section id="aboutProject" className="about-project main">
      <h2 className="main__title">О проекте</h2>
      <div className="about-project__text-container">
        <div className="about-project__text-subcontainer">
          <h3 className="about-project__subtitle">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-subcontainer">
          <h3 className="about-project__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__diagramma-container">
        <div className="about-project__diagramma about-project__diagramma_green">
          <span className="about-project__diagramma-text">1 неделя</span>
        </div>
        <div className="about-project__diagramma about-project__diagramma_grey">
          <span className="about-project__diagramma-text">4 недели</span>
        </div>
        <div className="about-project__diagramma">
          <span className="about-project__diagramma-text about-project__diagramma-text_grey">
            Back-end
          </span>
        </div>
        <div className="about-project__diagramma">
          <span className="about-project__diagramma-text about-project__diagramma-text_grey">
            Front-end
          </span>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
