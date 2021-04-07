function Footer() {
  return (
    <footer className="footer main">
      <div className=" footer__text">
        <p className="footer__text-description">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>

      <div className="footer__links">
        <p className="footer__copyright">&copy; 2021</p>
        <nav className="footer__links-nav">
          <ul className="footer__links-list">
            <li className="footer__link-item">
              <a
                className="footer__link"
                href="https://praktikum.yandex.ru/"
                target="_blank"
                rel="noreferrer oopener"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__link-item">
              <a
                className="footer__link"
                href="https://github.com/SimaNazarova"
                target="_blank"
                rel="noreferrer oopener"
              >
                Github
              </a>
            </li>
            <li className="footer__link-item">
              <a
                className="footer__link"
                href="https://vk.com/id76644845"
                target="_blank"
                rel="noreferrer oopener"
              >
                VK
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
