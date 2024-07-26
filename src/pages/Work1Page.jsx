import styles from "../styles/WorkPage.module.css";

const Work1Page = () => {
  return (
    <div className={styles.workPage}>
      <h1>Твір #1</h1>
      <p className={styles.description}>
        Короткий опис твору #1. Цей твір був створений Юрієм Шевченком та
        виконаний провідними музикантами.
      </p>
      <img
        className={styles.photo}
        src="/images/work1.jpg"
        alt="Виконавці твору #1"
      />
      <p>
        <a
          href="https://www.youtube.com/watch?v=example"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Переглянути виконання на YouTube
        </a>
      </p>
    </div>
  );
};

export default Work1Page;
