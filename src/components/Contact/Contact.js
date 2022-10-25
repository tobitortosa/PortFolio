import React from "react";
import s from "./Contact.module.css";
import { useState } from "react";
import validate from "./validator";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [error, setError] = useState({});

  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSendButton = (e) => {
    e.preventDefault();
    if (error.name) {
      alert(error.name);
    } else if (error.email) {
      alert(error.email);
    } else if ((error.name && error.email) || !input.name) {
      alert("Name and Email is required");
    } else {
      sendEmail();
      alert("Send!")
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    emailjs.sendForm(
      "service_0uacppa",
      "template_97t54cv",
      form.current,
      "c1uFzFc6MoxAFZkBP"
    );
  };

  return (
    <div className={s.container} id="Contact">
      <h3 className={s.title}>CONTACT</h3>
      <form ref={form} className={s.form} onSubmit={handleSendButton}>
        <label className={s.required}>Your Name</label>
        <input
          onChange={handleInputChange}
          name="name"
          type="text"
          placeholder="Name..."
          value={input.name}
        />
        <label className={s.required}>Your Email</label>
        <input
          onChange={handleInputChange}
          name="email"
          type="text"
          placeholder="Email..."
          value={input.email}
        />
        <label>Subject</label>

        <input
          onChange={handleInputChange}
          name="subject"
          type="text"
          placeholder="Subject..."
          value={input.subject}
        />
        <label>Your Message</label>
        <textarea
          onChange={handleInputChange}
          name="message"
          value={input.message}
          placeholder="Message..."
          id={s.message}
          rows="2"
          cols="20"
          wrap="hard"
        ></textarea>
        <button onClick={handleSendButton}>SEND</button>
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
