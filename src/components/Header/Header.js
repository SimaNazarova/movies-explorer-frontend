import Logo from "../Logo/Logo";
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

      {props.loggedIn ? (
        <div className={`header__menu header__menu-${props.navbar}`}>
          {windowWidth > 768 ? <LoggedMenu /> : <BurgerMenu />}
        </div>
      ) : (
        <div className={`header__menu header__menu-violet`}>
          <UnloggedMenu />
        </div>
      )}
    </header>
  );
}

export default Header;
