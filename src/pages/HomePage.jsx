import styles from "../../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <h1>Yuri Shevchenko</h1>
      <p className={styles.description}>Коротка біографія композитора...</p>
      <img className={styles.photo} src="/path/to/photo.jpg" alt="Композитор" />
    </div>
  );
};

export default HomePage;
