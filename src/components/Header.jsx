import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/">
              Головна
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/biography">
              Біографія
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/works">
              Твори
            </Link>
          </li>

          <li className={styles.navItem}>
            <Link className={styles.navLink} to="/contact">
              Контакти
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
