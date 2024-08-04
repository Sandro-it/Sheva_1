import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "../styles/Header.module.css";

const Header = () => {
  const { t } = useTranslation(); // Використовуємо хук для перекладу
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMenuClick = (e) => {
    if (
      e.target === e.currentTarget ||
      e.target.classList.contains(styles.navOpen)
    ) {
      closeMenu(); // Закриття меню при натисканні на пусте місце або на оверлей
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navContainer}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            onClick={handleMenuClick}
          >
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <Link className={styles.navLink} to="/" onClick={closeMenu}>
                  {t("home")} {/* Використовуємо переклад */}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/biography"
                  onClick={closeMenu}
                >
                  {t("biography")} {/* Використовуємо переклад */}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/legacy"
                  onClick={closeMenu}
                >
                  {t("legacy")} {/* Використовуємо переклад */}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/contact"
                  onClick={closeMenu}
                >
                  {t("contact_us")} {/* Використовуємо переклад */}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.languageSwitcherContainer}>
            <LanguageSwitcher /> {/* Додаємо перемикач мов */}
          </div>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
