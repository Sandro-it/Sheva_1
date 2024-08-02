import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import LegacyPage from "./pages/LegacyPage";
import WorkPage from "./pages/WorkPage";
import worksData from "./data/worksData";
import ContactPage from "./pages/ContactPage";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import styles from "./App.module.css";

function App() {
  const [loading] = React.useState(false);
  const [error] = React.useState(null);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className={styles.App}>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/biography" element={<BiographyPage />} />
          <Route path="/legacy" element={<LegacyPage />} />
          {worksData.map((work) => (
            <Route
              key={work.id}
              path={`/works/:workId`}
              element={<WorkPage work={work} />}
            />
          ))}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
