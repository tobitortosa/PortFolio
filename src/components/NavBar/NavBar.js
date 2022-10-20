import React from "react";
import s from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  const [hamburgerButton, setHamburgerButton] = useState(true);

  const toggleButton = () => {
    setHamburgerButton(!hamburgerButton);
  };

  return (
    <div className={s.container}>
      <nav className={s.navContainer}>
        <div>
          <a>
            <div id={s.logoImg}></div>
          </a>
        </div>
        <a
          to="#"
          className={hamburgerButton ? null : s.active}
          onClick={toggleButton}
          id={s.toggleButton}
        >
          <span id={s.firstBar} className={s.bar}></span>
          <span id={s.secondBar} className={s.bar}></span>
          <span id={s.thirdBar} className={s.bar}></span>
        </a>
        <div className={hamburgerButton ? s.toggle : s.ulContainer}>
          {["Home", "About", "Skills", "Portfolio", "Contact"].map(
            (el, index) => {
              return (
                <li key={index}>
                  <Link
                    to={el}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1200}
                  >
                    <p>{el}</p>
                  </Link>
                </li>
              );
            }
          )}
        </div>
      </nav>
    </div>
  );
}
