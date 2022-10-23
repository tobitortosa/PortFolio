import React from "react";
import s from "./PortFolio.module.css";

export default function PortFolio() {
  return (
    <div id="Portfolio" className={s.container}>
      <h3 className={s.title}>PORTFOLIO</h3>
      <div className={s.cardContainer}>
        <div id={s.pf} className={s.card}>
          <div className={s.panel}>
            <div className={s.text}>
              <h4>Weather App</h4>
              <p>Get Weather Details</p>
            </div>
            <div className={s.buttons}>
              <a
                href="https://github.com/tobitortosa/Videogames-PI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id={s.gitImg}></div>
              </a>
              <a
                href="https://videogames-pi-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id={s.arrowImg}></div>
              </a>
            </div>
          </div>
        </div>

        <div id={s.pi} className={s.card}>
          <div className={s.panel}>
            <div className={s.text}>
              <h4>VideoGames App</h4>
              <p>Find your favorite games</p>
            </div>
            <div className={s.buttons}>
              <a
                href="https://github.com/tobitortosa/Videogames-PI"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id={s.gitImg}></div>
              </a>
              <a
                href="https://videogames-pi-seven.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id={s.arrowImg}></div>
              </a>
            </div>
          </div>
        </div>

        <div id={s.wa} className={s.card}>
          <div className={s.panel}>
            <div className={s.text}>
              <h4>Weather App</h4>
              <p>Get Weather Details</p>
            </div>
            <div className={s.buttons}>
              <a
                href="https://github.com/tobitortosa/Weather-App"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id={s.gitImg}></div>
              </a>
              <a
                href="https://weather-app-bay-eta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div id={s.arrowImg}></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
