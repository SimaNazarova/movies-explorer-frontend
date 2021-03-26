function NavTab() {
  return (
    <section className="nav-tab">
      <nav className="nav-tab__navigation">
        <ul className="nav-tab__list">
          <li>
            <a className="nav-tab__list-item" href="#aboutProject">
              О проекте
            </a>
          </li>
          <li>
            <a className="nav-tab__list-item" href="#tech">
              Технологии
            </a>
          </li>
          <li>
            <a className="nav-tab__list-item" href="#aboutMe">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;
