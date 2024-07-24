import styles from "../../styles/BiographyPage.module.css";

const BiographyPage = () => {
  return (
    <div className={styles.biographyPage}>
      <h1>Біографія</h1>
      <p className={styles.text}>
        Докладний опис життя композитора та його досягнень, включаючи важливі
        події та переломні моменти у кар'єрі.
      </p>
      <p className={styles.text}>
        Тут також можна включити інформацію про особисте життя, впливи на музику
        та спадщину композитора.
      </p>
      <p className={styles.text}>
        Можливе використання цитат, відгуків про його твори, а також посилань на
        архівні матеріали та інші ресурси.
      </p>
    </div>
  );
};

export default BiographyPage;
