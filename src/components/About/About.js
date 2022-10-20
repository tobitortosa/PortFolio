import React from "react";
import s from "./About.module.css";

export default function About() {
  return (
    <div className={s.container} id="About">
      <h3 className={s.title}>ABOUT</h3>
      <div className={s.textContainer}>
        <div className={s.hexContainer}>
          <div className={s.twoHexContainer}>
            <div className={s.hexs}>
              <div className={s.hex}>
                <i class="uil uil-lightbulb-alt"></i>
              </div>
              <div className={s.hexTxt}>
                <h3>Fast</h3>
                <p>Creative and Proactive Person who Always Seeks to Improve</p>
              </div>
            </div>
            <div className={s.hexs}>
              <div className={s.hex}>
                <i class="uil uil-lightbulb-alt"></i>
              </div>
              <div className={s.hexTxt}>
                <h3>Fast</h3>

                <p>Creative and Proactive Person who Always Seeks to Improve</p>
              </div>
            </div>
          </div>
          <div className={s.twoHexContainer}>
            <div className={s.hexs}>
              <div className={s.hex}>
                <i class="uil uil-lightbulb-alt"></i>
              </div>
              <div className={s.hexTxt}>
                <h3>Fast</h3>

                <p>Creative and Proactive Person who Always Seeks to Improve</p>
              </div>
            </div>
            <div className={s.hexs}>
              <div className={s.hex}>
                <i class="uil uil-lightbulb-alt"></i>
              </div>
              <div className={s.hexTxt}>
                <h3>Fast</h3>
                <p>Creative and Proactive Person who Always Seeks to Improve</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.imgContainer}>
        <div id={s.img}></div>
      </div>
    </div>
  );
}
