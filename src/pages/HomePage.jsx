import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className={styles.homePage}>
        <div>
          <h1>Yuri Shevchenko</h1>
          <p className={styles.description}>
            «Я безмежно радію, коли бачу, що моя музика спромоглася викликати на
            обличчі слухача щасливу посмішку. А на менше я просто не згоден».
          </p>
        </div>
        <img
          className={styles.photo}
          src="/images/Sheva1.jpg"
          alt="Композитор"
        />
      </div>
    </div>
  );
};

export default HomePage;
