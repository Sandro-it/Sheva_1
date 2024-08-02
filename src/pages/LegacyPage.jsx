import { Link } from "react-router-dom";
import styles from "../styles/LegacyPage.module.css";
import worksData from "../data/worksData";

const LegacyPage = () => {
  const groupedWorks = worksData.reduce((acc, work) => {
    if (!acc[work.category]) {
      acc[work.category] = [];
    }
    acc[work.category].push(work);
    return acc;
  }, {});

  return (
    <div className="container">
      <div className={styles.legacyPage}>
        <h1>Творча спадщина у категоріях</h1>
        {Object.keys(groupedWorks).map((category) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul className={styles.worksList}>
              {groupedWorks[category].map((work) => (
                <li key={work.id}>
                  <Link to={`/works/${work.id}`} className={styles.workLink}>
                    {work.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegacyPage;
