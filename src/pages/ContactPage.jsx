import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xzzpdkyl");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setSubmitted(true);
    }
  }, [state.succeeded]);

  useEffect(() => {
    setSubmitted(false);
  }, []);

  return (
    <div className={styles.contactPage}>
      {submitted ? (
        <p>Дякуємо за ваше повідомлення!</p>
      ) : (
        <>
          <h1>Контакти</h1>
          <p className={styles.text}>
            Тут ви можете знайти інформацію про процедуру отримання ліцензій та
            інші правові питання.
          </p>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="name">
              Ім'я
            </label>
            <input
              className={styles.input}
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
            />
            <label className={styles.label} htmlFor="email">
              Електронна пошта
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className={styles.label} htmlFor="message">
              Повідомлення
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              required
              autoComplete="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className={styles.button}
              type="submit"
              disabled={state.submitting}
            >
              Надіслати
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default ContactPage;
