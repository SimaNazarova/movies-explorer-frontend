import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__error-text">Cтраница не найдена</p>
      <NavLink to="/" className="not-found__link-back">
        Назад
      </NavLink>
    </section>
  );
}

export default NotFound;
