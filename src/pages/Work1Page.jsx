import styles from "../styles/WorkPage.module.css";
import { Link } from "react-router-dom";

const Work1Page = () => {
  return (
    <div className="container">
      <div className={styles.workPage}>
        <div className={styles.topSection}>
          <Link to="/legacy" className={styles.backButton}>
            Повернутися до списку творів
          </Link>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.textSection}>
            <h1>Твір #1</h1>
            <p className={styles.description}>
              Це приклад опису твору #1. Опис може включати інформацію про
              історію створення, значення для культурної спадщини та деталі
              виконання.
            </p>
            <p>
              Посилання на виконання твору:
              <a
                className={styles.link}
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Переглянути на YouTube
              </a>
            </p>
          </div>
          <div className={styles.imageSection}>
            <img
              className={styles.photo}
              src="/images/Бармалей.jpg"
              alt="Твір #1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work1Page;
