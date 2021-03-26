import { NavLink } from "react-router-dom";
import AccountIcon from "../AccountIcon/AccountIcon";

function LoggedMenu() {
  return (
    <>
      <NavLink
        to="/movies"
        className="logged-menu__movies"
        activeClassName="logged-menu__active-navlink"
      >
        Фильмы
      </NavLink>

      <NavLink
        to="/saved-movies"
        className="logged-menu__saved-movies"
        activeClassName="logged-menu__active-navlink"
      >
        Сохраненные фильмы
      </NavLink>

      <NavLink to="/profile" className=" logged-menu__account">
        <AccountIcon />
      </NavLink>
    </>
  );
}

export default LoggedMenu;
