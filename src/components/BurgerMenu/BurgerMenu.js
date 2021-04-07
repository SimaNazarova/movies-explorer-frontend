import { NavLink } from "react-router-dom";
import AccountIcon from "../AccountIcon/AccountIcon";

function BurgerMenu() {
  return (
    <nav class="burger-menu">
      <input className="burger-menu__input" type="checkbox" />
      <label className="burger-menu__label"></label>
      <span className="burger-menu__span"></span>
      <span className="burger-menu__span"></span>
      <span className="burger-menu__span"></span>

      <ul className="burger-menu__ul">
        <li className="burger-menu__li">
          {" "}
          <NavLink
            exact
            to="/"
            className="burger-menu__navlink burger-menu__navlink_text"
            activeClassName="burger-menu__navlink_active"
          >
            Главная
          </NavLink>
        </li>
        <li className="burger-menu__li">
          <NavLink
            to="/movies"
            className="burger-menu__navlink burger-menu__navlink_text"
            activeClassName="burger-menu__navlink_active"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="burger-menu__li">
          <NavLink
            to="/saved-movies"
            className="burger-menu__navlink burger-menu__navlink_text"
            activeClassName="burger-menu__navlink_active"
          >
            Сохраненные фильмы
          </NavLink>
        </li>
        <li className="burger-menu__li">
          <NavLink
            to="/profile"
            className="burger-menu__navlink"
            activeClassName="burger-menu__navlink_active"
          >
            <AccountIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerMenu;
