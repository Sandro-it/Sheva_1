import React from "react";
import "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Ім'я Композитора. Всі права захищені.</p>
      <div className="social-links">
        <a href="mailto:example@example.com">Електронна пошта</a>
        <a href="tel:+123456789">Телефон</a>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
