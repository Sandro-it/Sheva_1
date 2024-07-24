// import styles from "../styles/ContactPage.module.css";

// const ContactPage = () => {
//   return (
//     <div className={styles.contactPage}>
//       <h1>Контакти</h1>
//       <p className={styles.text}>
//         Тут ви можете знайти інформацію про процедуру отримання ліцензій та інші
//         правові питання.
//       </p>
//       <form className={styles.contactForm}>
//         <label className={styles.label}>YourName</label>
//         <input className={styles.input} type="text" name="name" required />
//         <label className={styles.label}>Електронна пошта</label>
//         <input className={styles.input} type="email" name="email" required />
//         <label className={styles.label}>Повідомлення</label>
//         <textarea
//           className={styles.textarea}
//           name="message"
//           required
//         ></textarea>
//         <button className={styles.button} type="submit">
//           Надіслати
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ContactPage;

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xzzpdkyl");

  if (state.succeeded) {
    return <p>Дякуємо за ваше повідомлення!</p>;
  }

  return (
    <div className={styles.contactPage}>
      <h1>Контакти</h1>
      <p className={styles.text}>
        Тут ви можете знайти інформацію про процедуру отримання ліцензій та інші
        правові питання.
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
        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
      {state.succeeded && (
        <p className={styles.success}>Лист успішно надіслано!</p>
      )}
    </div>
  );
};

export default ContactPage;
