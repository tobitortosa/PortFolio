import React from "react";
import s from "./Skills.module.css";
import "./levels.css";
import { useState } from "react";

export default function Skills() {
  const [start, setStart] = useState(false);

  window.onscroll = () => handleScroll();

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 950) {
      setStart(true);
    }
  };

  if (start) {
    console.log("nashe");
  }

  return (
    <div className={s.container} id="Skills">
      <h3 className={s.title}>SKILLS</h3>
      {start && (
        <div className={s.cupsContainer}>
          <div className={s.cups}>
            <div className={s.cup}>
              <div id="bannerJS">
                <div class="fillJS">
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
                      id="waveShapeJS"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                    c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgJS}></div>
            </div>
            <div className={s.cup}>
              <div id="bannerHTML">
                <div class="fillHTML">
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
                      id="waveShapeHTML"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgHTMLBG}></div>
              <div id={s.imgHTML}></div>
            </div>
          </div>
          <div className={s.cups}>
            <div className={s.cup}>
              <div id="bannerCSS">
                <div class="fillCSS">
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
                      id="waveShapeCSS"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgCSS}></div>
            </div>
            <div className={s.cup}>
              <div id="bannerREACT">
                <div class="fillREACT">
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
                      id="waveShapeREACT"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgREACT}></div>
            </div>
          </div>
          <div className={s.cups}>
            <div className={s.cup}>
              <div id="bannerNODE">
                <div class="fillNODE">
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
                      id="waveShapeNODE"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgNODE}></div>
            </div>
            <div className={s.cup}>
              <div id="bannerREDUX">
                <div class="fillREDUX">
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
                      id="waveShapeREDUX"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgREDUX}></div>
            </div>
          </div>
          <div className={s.cups}>
            <div className={s.cup}>
              <div id="bannerPOSTGRES">
                <div class="fillPOSTGRES">
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
                      id="waveShapePOSTGRES"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgPOSTGRES}></div>
            </div>
            <div className={s.cup}>
              <div id="bannerEXPRESS">
                <div class="fillEXPRESS">
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
                      id="waveShapeEXPRESS"
                      d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                  c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                  c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z"
                    />
                  </svg>
                </div>
              </div>
              <div id={s.imgEXPRESSBG}></div>
              <div id={s.imgEXPRESS}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
