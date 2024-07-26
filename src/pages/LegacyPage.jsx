// import styles from "../styles/LegacyPage.module.css";

// const LegacyPage = () => {
//   return (
//     <div className={styles.LegacyPage}>
//       <h1>Твори</h1>
//       <p className={styles.text}>
//         Перелік основних музичних творів композитора з можливістю завантаження
//         нот та прослуховування аудіозаписів.
//       </p>
//       <p className={styles.text}>
//         Кожен твір супроводжується коротким описом, історією створення та
//         значенням для музичної спадщини.
//       </p>
//     </div>
//   );
// };

// export default LegacyPage;

import styles from "../styles/LegacyPage.module.css";

const LegacyPage = () => {
  return (
    <div className={styles.legacyPage}>
      <h1>Твори</h1>
      <p className={styles.text}>
        Перелік основних музичних творів композитора з можливістю завантаження
        нот та прослуховування аудіозаписів.
      </p>
      <ul className={styles.worksList}>
        <li>
          <Link to="/works/work1" className={styles.workLink}>
            Твір #1
          </Link>
        </li>
        {/* Додайте інші твори тут */}
      </ul>
    </div>
  );
};

export default LegacyPage;
