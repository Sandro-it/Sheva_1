import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Контакти</h1>
      <p className={styles.text}>
        Тут ви можете знайти інформацію про процедуру отримання ліцензій та інші
        правові питання.
      </p>
      <form className={styles.contactForm}>
        <label className={styles.label}>Ім'я</label>
        <input className={styles.input} type="text" name="name" required />
        <label className={styles.label}>Електронна пошта</label>
        <input className={styles.input} type="email" name="email" required />
        <label className={styles.label}>Повідомлення</label>
        <textarea
          className={styles.textarea}
          name="message"
          required
        ></textarea>
        <button className={styles.button} type="submit">
          Надіслати
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
