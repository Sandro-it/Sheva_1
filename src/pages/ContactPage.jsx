import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/ContactPage.module.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (name.length < 3 || name.length > 30) {
      errors.name = "Ім'я та прізвище повинні містити від 3 до 30 символів.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Невірний формат електронної пошти.";
    }
    if (message.length < 10 || message.length > 500) {
      errors.message = "Повідомлення повинно містити від 10 до 500 символів.";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Логіка для надсилання листа через EmailJS
      emailjs
        .sendForm(
          "service_d201y59",
          "template_8ep8akz",
          e.target,
          "n0r__iuFChqjNYKvx"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Ваше повідомлення надіслано!");
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
            alert("Виникла помилка при надсиланні листа.");
          }
        );
    }
  };

  return (
    <div className="container">
      <div className={styles.contactPage}>
        <div className={styles.leftColumn}>
          <h2>Керуючі правами</h2>
          <p>
            Тут ви можете знайти інформацію про керуючих правами на музичні
            твори Юрія Шевченка. Якщо у вас виникли питання щодо використання
            творів, будь ласка, зв'яжіться з нами.
          </p>
          <p>
            Ми допоможемо вам у питаннях, пов'язаних із ліцензуванням, правами
            на виконання, а також надамо інші необхідні роз'яснення.
          </p>
          <p>
            Електронна пошта для зв'язку:{" "}
            <strong>shevchenko.legacy@gmail.com</strong>
          </p>
        </div>
        <div className={styles.rightColumn}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Ім'я та прізвище</label>
              <input
                type="text"
                id="name"
                name="from_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введіть своє ім'я та прізвище"
                className={errors.name ? styles.inputError : ""}
              />
              {errors.name && <p className={styles.errorText}>{errors.name}</p>}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Електронна пошта</label>
              <input
                type="email"
                id="email"
                name="from_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введіть свою електронну пошту"
                className={errors.email ? styles.inputError : ""}
              />
              {errors.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Повідомлення</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Введіть текст повідомлення"
                className={errors.message ? styles.inputError : ""}
                rows="5"
              />
              {errors.message && (
                <p className={styles.errorText}>{errors.message}</p>
              )}
            </div>
            <button type="submit" disabled={isSubmitted}>
              Надіслати
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
