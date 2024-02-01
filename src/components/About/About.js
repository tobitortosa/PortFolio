import React from "react";
import s from "./About.module.css";

export default function About() {
  return (
    <div className={s.container} id="About">
      <h3 className={s.title}>ABOUT</h3>
      <div className={s.textAndImgContainer}>
        <div className={s.textContainer}>
          <div className={s.hexContainer}>
            <div className={s.twoHexContainer}>
              <div className={s.hexs}>
                <div className={s.hex}>
                  <i class="uil uil-lightbulb-alt"></i>
                </div>
                <div className={s.hexTxt}>
                  <h3>Creative</h3>
                  <p>
                    Creative and Proactive Person who Always Seeks to Improve
                  </p>
                </div>
              </div>
              <div className={s.hexs}>
                <div className={s.hex}>
                  <i class="uil uil-head-side"></i>
                </div>
                <div className={s.hexTxt}>
                  <h3>Retailer</h3>
                  <p>
                    I am a detailed person who always seeks to make the best
                    version of my projects.
                  </p>
                </div>
              </div>
            </div>
            <div className={s.twoHexContainer}>
              <div className={s.hexs}>
                <div className={s.hex}>
                  <i class="uil uil-brain"></i>
                </div>
                <div className={s.hexTxt}>
                  <h3>Open Minded</h3>

                  <p>Willing to consider new ideas, without prejudice.</p>
                </div>
              </div>
              <div className={s.hexs}>
                <div className={s.hex}>
                  <i class="uil uil-fire"></i>
                </div>
                <div className={s.hexTxt}>
                  <h3>Passionate</h3>
                  <p>I am a person who is passionate about self-improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={s.imgContainer}>
          <div id={s.img}></div>
          <a
            href="https://drive.google.com/file/d/1gJlHtipFp0XfYKTifGZfVjE78XAJTrns/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
