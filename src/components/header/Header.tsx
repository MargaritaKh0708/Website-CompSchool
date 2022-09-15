import logo from "assets/img/logo.svg";
import { ModalWindow } from "components/modal/ModalWindow";
import { useState } from "react";
import { NavigationList } from "./NavigationList";

export const Header: React.FC = () => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);

  return (
    <header className="header container">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navigation">
          <NavigationList/>
          <button className="navigation__btn" onClick={()=> setLogin(true)}>Зайти в кабинет</button>
          <button name="burger" type="button" className="header__btn">
            <div className="burger" onClick={() => setBurgerActive(true)}>
              <span className="burger__item"></span>
              <span className="burger__item"></span>
              <span className="burger__item"></span>
            </div>
          </button>
          <ModalWindow active={burgerActive} setActive={setBurgerActive}>
            <NavigationList/>
          </ModalWindow>
          <ModalWindow active={login} setActive={setLogin}>
          </ModalWindow>
        </nav>
      </div>
    </header>
  );
};
