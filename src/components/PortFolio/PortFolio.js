import React from "react";
import s from "./PortFolio.module.css";

export default function PortFolio() {
  return (
    <div id="Portfolio" className={s.container}>
      <h3 className={s.title}>PORTFOLIO</h3>
      <div className={s.cardContainer}>
        <div className={s.card}>
          <div className={s.panel}>
            <div className={s.text}>
              <h4>Weather App</h4>
              <p>Get Weather Details</p>
            </div>
            <div className={s.buttons}>
              <div id={s.gitImg}></div>
              <div id={s.arrowImg}></div>
            </div>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.panel}>
            <div className={s.text}>
              <h4>VideoGames App</h4>
              <p>Find your favorite games</p>
            </div>
            <div className={s.buttons}>
              <div id={s.gitImg}></div>
              <div id={s.arrowImg}></div>
            </div>
          </div>
        </div>

        <div className={s.card}>
          <div className={s.panel}>
            <div className={s.text}>
              <h4>Weather App</h4>
              <p>Get Weather Details</p>
            </div>
            <div className={s.buttons}>
              <div id={s.gitImg}></div>
              <div id={s.arrowImg}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
