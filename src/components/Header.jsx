import { Link } from "react-router-dom";
import "../styles/Header.module.css";

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Головна</Link>
          </li>
          <li>
            <Link to="/biography">Біографія</Link>
          </li>
          <li>
            <Link to="/works">Твори</Link>
          </li>
          <li>
            <Link to="/contact">Контакти</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
