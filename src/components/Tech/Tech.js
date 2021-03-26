function Tech() {
  return (
    <section className="tech main" id="tech">
      <h2 className="main__title">Технологии</h2>
      <div className="tech__content">
        <h3 className="tech__subtitle">7 технологий</h3>
        <p className="tech__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="tech__list">
          <li className="tech__list-li">
            <div className="tech__list-content">HTML</div>
          </li>
          <li className="tech__list-li">
            <div className="tech__list-content">CSS</div>
          </li>
          <li className="tech__list-li">
            <div className="tech__list-content">JS</div>
          </li>
          <li className="tech__list-li">
            <div className="tech__list-content">React</div>
          </li>
          <li className="tech__list-li">
            <div className="tech__list-content">Git</div>
          </li>
          <li className="tech__list-li">
            <div className="tech__list-content">Express.js</div>
          </li>
          <li className="tech__list-li">
            <div className="tech__list-content">mongoDB</div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Tech;
