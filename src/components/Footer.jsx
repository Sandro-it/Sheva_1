import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; 2024 Yuri Shevchenko. Всі права захищені.
      </p>
      <div className={styles.socialLinks}>
        <a className={styles.socialLink} href="mailto:example@example.com">
          Електронна пошта
        </a>
        <a className={styles.socialLink} href="tel:+123456789">
          Телефон
        </a>
        <a className={styles.socialLink} href="https://facebook.com">
          Facebook
        </a>
        <a className={styles.socialLink} href="https://twitter.com">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
