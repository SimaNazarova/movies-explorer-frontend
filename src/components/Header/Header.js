import Logo from "../Logo/Logo";
import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UnloggedMenu from "../UnloggedMenu/UnloggedMenu";
import LoggedMenu from "../LoggedMenu/LoggedMenu";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, []);

  return (
    <header className={`movies header header-${props.color} `}>
      <Logo logo="header" />
      <div className={`header__menu header__menu-${props.navbar}`}>
        <Route exact path="/">
          <UnloggedMenu />
        </Route>

        <Route path={["/movies", "/saved-movies", "/profile"]}>
          {windowWidth > 768 ? <LoggedMenu /> : <BurgerMenu />}
        </Route>
      </div>
    </header>
  );
}

export default Header;
