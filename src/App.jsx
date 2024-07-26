// import { Router, Route, Routes } from "react-router-dom";
// import { lazy } from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// const HomePage = lazy(() => import("./pages/HomePage"));
// const BiographyPage = lazy(() => import("./pages/BiographyPage"));
// const WorksPage = lazy(() => import("./pages/WorksPage"));
// const ContactPage = lazy(() => import("./pages/ContactPage"));
// import "./App.module.css";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/" exact component={<HomePage />} />
//           <Route path="/biography" component={<BiographyPage />} />
//           <Route path="/works" component={<WorksPage />} />
//           <Route path="/contact" component={<ContactPage />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import LegacyPage from "./pages/LegacyPage";
import Work1Page from "./pages/Work1Page";
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

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/biography" element={<BiographyPage />} />
        <Route path="/legacy" element={<LegacyPage />} />
        <Route path="/works" element={<Work1Page />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
