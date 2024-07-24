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

import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errorMessage/ErrorMessage";
import styles from "./styles/App.module.css";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className={styles.App}>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/biography" component={BiographyPage} />
        <Route path="/works" component={WorksPage} />
        <Route path="/contact" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
