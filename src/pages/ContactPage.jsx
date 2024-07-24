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
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:kozachenkooleksandr@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={styles.contactPage}>
      <h1>Контакти</h1>
      <p className={styles.text}>
        Тут ви можете знайти інформацію про процедуру отримання ліцензій та інші
        правові питання.
      </p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label className={styles.label}>Ім'я</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />
        <label className={styles.label}>Електронна пошта</label>
        <input
          className={styles.input}
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <label className={styles.label}>Повідомлення</label>
        <textarea
          className={styles.textarea}
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          autoComplete="message"
        ></textarea>
        <button className={styles.button} type="submit">
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
