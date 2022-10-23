import React from "react";
import s from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={s.container} id="Contact">
      <h3 className={s.title}>CONTACT</h3>
      <form className={s.form}>
        <label className={s.required}>Your Name</label>
        <input type="text" />
        <label className={s.required}>Your Email</label>
        <input type="text" />
        <label>Subject</label>
        <input type="text" />
        <label>Your Message</label>
        <textarea id={s.message} rows="2" cols="20" wrap="hard"></textarea>
        <button onClick={(e) => e.preventDefault()}>SEND</button>
        <div className={s.emailAndNumber}>
          <div className={s.row}>
            <i class="uil uil-mobile-android"></i>
            <p>+54 11 40851865</p>
          </div>
          <div className={s.row}>
            <i class="uil uil-envelope"></i>
            <p>tobiastortosa17@gmail.com</p>
          </div>
        </div>
        <div className={s.other}>
          <div className={s.img}>
            <a
              href="https://www.linkedin.com/in/tobiastortosa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.link}></div>
            </a>
            <a
              href="https://github.com/tobitortosa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.git}></div>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=541140851865"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.wpp}></div>
            </a>
          </div>
          <p>© 2023 Tobías Tortosa.</p>
        </div>
      </form>
    </div>
  );
}
