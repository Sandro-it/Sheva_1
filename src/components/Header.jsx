import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <header className={styles.header}>
//       <div className="container">
//         <div className={styles.navContainer}>
//           <button className={styles.menuButton} onClick={toggleMenu}>
//             ☰
//           </button>
//           <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
//             <ul className={styles.navLinks}>
//               <li className={styles.navItem} onClick={closeMenu}>
//                 <Link className={styles.navLink} to="/">
//                   ГОЛОВНА
//                 </Link>
//               </li>
//               <li className={styles.navItem} onClick={closeMenu}>
//                 <Link className={styles.navLink} to="/biography">
//                   БІОГРАФІЯ
//                 </Link>
//               </li>
//               <li className={styles.navItem} onClick={closeMenu}>
//                 <Link className={styles.navLink} to="/legacy">
//                   СПАДЩИНА
//                 </Link>
//               </li>
//               <li className={styles.navItem} onClick={closeMenu}>
//                 <Link className={styles.navLink} to="/contact">
//                   КОНТАКТИ
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//       {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
//     </header>
//   );
// };

// export default Header;

const Header = () => {
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
                  ГОЛОВНА
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/biography"
                  onClick={closeMenu}
                >
                  БІОГРАФІЯ
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/legacy"
                  onClick={closeMenu}
                >
                  СПАДЩИНА
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/contact"
                  onClick={closeMenu}
                >
                  КОНТАКТИ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
