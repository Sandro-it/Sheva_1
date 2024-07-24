import styles from "../styles/WorksPage.module.css";

const WorksPage = () => {
  return (
    <div className={styles.worksPage}>
      <h1>Твори</h1>
      <p className={styles.text}>
        Перелік основних музичних творів композитора з можливістю завантаження
        нот та прослуховування аудіозаписів.
      </p>
      <p className={styles.text}>
        Кожен твір супроводжується коротким описом, історією створення та
        значенням для музичної спадщини.
      </p>
    </div>
  );
};

export default WorksPage;
