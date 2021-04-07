import { NavLink } from "react-router-dom";

function UnloggedMenu() {
  return (
    <>
      <NavLink
        to="/sign-up"
        className="unlogged-menu__register unlogged-menu__text"
      >
        Регистрация
      </NavLink>

      <NavLink
        to="/sign-in"
        className=" unlogged-menu__login unlogged-menu__text"
      >
        <div className="unlogged-menu__login-button">Войти</div>
      </NavLink>
    </>
  );
}

export default UnloggedMenu;
