import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; 2024 Yuri Shevchenko. Всі права захищені.
      </p>
      <div className={styles.socialLinks}>
        <Link className={styles.socialLink} to="/contact">
          Електронна пошта
        </Link>
        <a className={styles.socialLink} href="tel:+380671967232">
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
