import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <ul className={styles.navLinks}>
            <li className={styles.navItem} onClick={closeMenu}>
              <Link className={styles.navLink} to="/">
                Головна
              </Link>
            </li>
            <li className={styles.navItem} onClick={closeMenu}>
              <Link className={styles.navLink} to="/biography">
                Біографія
              </Link>
            </li>
            <li className={styles.navItem} onClick={closeMenu}>
              <Link className={styles.navLink} to="/works">
                Спадщина
              </Link>
            </li>
            <li className={styles.navItem} onClick={closeMenu}>
              <Link className={styles.navLink} to="/contact">
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
