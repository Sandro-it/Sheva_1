import { Helmet } from "react-helmet-async";
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
    <>
      <Helmet>
        <title>
          Творча спадщина | Legacy - Юрій Шевченко | Yuri Shevchenko
        </title>
        <meta
          name="description"
          content="Перегляньте творчий спадок Юрія Шевченка, видатного українського композитора. 
        Explore the creative legacy of Yuri Shevchenko, an outstanding Ukrainian composer."
        />
      </Helmet>
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
    </>
  );
};

export default LegacyPage;
