import React from "react";
import WaterCup from "../Cup/WaterCup";
import s from "./Skills.module.css";

export default function Skills() {
  return (
    <div className={s.container} id="Skills">
      <WaterCup
        waterLevel={"banner1"}
        fillLevel={"fill1"}
        waveLevel={"waveShape1"}
      />
      <WaterCup
        waterLevel={"banner3"}
        fillLevel={"fill3"}
        waveLevel={"waveShape3"}
      />
      <WaterCup
        waterLevel={"banner6"}
        fillLevel={"fill6"}
        waveLevel={"waveShape6"}
      />
    </div>
  );
}
