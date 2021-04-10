function Tech() {
  const techList = [
    "HTML",
    "CSS",
    " JS",
    " React",
    "Git",
    "Express.js",
    "mongoDB",
  ];

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
          {techList.map((item, i) => (
            <li key={i} className="tech__list-li">
              <div className="tech__list-content">{item}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Tech;
