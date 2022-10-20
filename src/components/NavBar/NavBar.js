import React from "react";
import s from "./NavBar.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

export default function NavBar() {
  console.log(window.screen.width);

  const [hamburgerButton, setHamburgerButton] = useState(true);

  const toggleButton = () => {
    setHamburgerButton(!hamburgerButton);
  };

  return (
    <div className={s.container}>
      <nav className={s.navContainer}>
        <div id={s.div}></div>
        <div className={s.logoContainer}>
          {window.screen.width > 800 || hamburgerButton ? (
            <Link
              to="Home"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
            >
              <p>Tt</p>
            </Link>
          ) : null}
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
                    onClick={toggleButton}
                    to={el}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={1000}
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
