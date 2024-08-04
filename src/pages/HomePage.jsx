import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "../styles/HomePage.module.css";

// const HomePage = () => {

//   return (
//     <>
//       <Helmet>
//         <title>Головна | Home - Юрій Шевченко | Yuri Shevchenko</title>
//         <meta
//           name="description"
//           content="Офіційний сайт, присвячений творчості Юрія Шевченка. Дізнайтесь більше про його життя, творчий шлях та музичний спадок.
//       Official website dedicated to the work of Yuri Shevchenko. Learn more about his life, creative journey, and musical legacy."
//         />
//       </Helmet>
//       <div className="container">
//         <div className={styles.homePage}>
//           <div>
//             <h1>Yuri Shevchenko</h1>
//             <p className={styles.description}>
//               «Я безмежно радію, коли бачу, що моя музика спромоглася викликати
//               на обличчі слухача щасливу посмішку. А на менше я просто не
//               згоден».
//             </p>
//           </div>
//           <img
//             className={styles.photo}
//             src="/images/Sheva1.jpg"
//             alt="Композитор"
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

const HomePage = () => {
  const { t } = useTranslation(); // Використовуємо хук для перекладу

  return (
    <>
      <Helmet>
        <title>
          {t("home_title")} | Home - Юрій Шевченко | Yuri Shevchenko
        </title>
        <meta name="description" content={t("home_description")} />
      </Helmet>
      <div className="container">
        <div className={styles.homePage}>
          <div>
            <h1>Yuri Shevchenko</h1>
            <p className={styles.description}>
              {t("home_content")} {/* Використовуємо переклад */}
            </p>
          </div>
          <img
            className={styles.photo}
            src="/images/Sheva1.jpg"
            alt={t("home_photo_alt")} // Використовуємо переклад //
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
