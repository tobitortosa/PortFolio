import React from "react";
import s from "./WaterCup.module.css";
import "./levels.css";

export default function WaterCup({ waterLevel, fillLevel, waveLevel, img, waterColor }) {
  return (
    <div className={s.container}>
      <div className={s.cup}>
        <div id={waterLevel}>
          <div class={fillLevel}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="300px"
              height="300px"
              viewBox="0 0 300 300"
              enable-background="new 0 0 300 300"
              xmlSpace="preserve"
            >
              <path
                fill="#04ACFF"
                id={waveLevel}
                d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
              c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
              c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
              />
            </svg>
          </div>
        </div>
      </div>
      <img id={s.img} src={"https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png"} />
    </div>
  );
}
