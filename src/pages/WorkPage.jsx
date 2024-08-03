import { useParams, Link } from "react-router-dom";
import styles from "../styles/WorkPage.module.css";
import worksData from "../data/worksData";

const WorkPage = () => {
  const { workId } = useParams();
  const work = worksData.find((work) => work.id === workId);

  if (!work) {
    return <div>Твір не знайдено</div>;
  }

  return (
    <div className="container">
      <div className={styles.workPage}>
        <div className={styles.topSection}>
          <Link to="/legacy" className={styles.backButton}>
            до списку творів
          </Link>
        </div>
        <div className={styles.contentSection}>
          <div className={styles.textSection}>
            <h1>{work.title}</h1>
            <p className={styles.description}>{work.description}</p>
            <p>
              {/* Посилання на виконання твору: */}
              <a
                className={styles.link}
                href={work.videoUrl}
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
              src={work.imageUrl}
              alt={work.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
