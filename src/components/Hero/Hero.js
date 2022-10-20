import React, { useState } from "react";
import s from "./Hero.module.css";
import Typed from "react-typed";

export default function Hero() {
  let text = "Programmer";

  const textLoad = () => {
    setTimeout(() => {
      text = "Programmer";
    }, 1000);
  };
  textLoad();

  return (
    <div className={s.container} id="Home">
      <div className={s.typeContainer}>
        <p>
          Hello, I'm
          <h3>
            Tobías Tortosa<span id={s.dot}>.</span>
          </h3>
        </p>
        <span className={s.text} id={s.firstText}>
          I'm a
        </span>
        <span className={s.text} id={s.secText}>
          <Typed
            strings={["Full Stack Developer", "Creator"]}
            typeSpeed={100}
            backSpeed={55}
            loop
          />
        </span>
      </div>
    </div>
  );
}
