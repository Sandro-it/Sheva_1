import { Router, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));
const BiographyPage = lazy(() => import("./pages/BiographyPage"));
const WorksPage = lazy(() => import("./pages/WorksPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
import "./App.module.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={<HomePage />} />
          <Route path="/biography" component={<BiographyPage />} />
          <Route path="/works" component={<WorksPage />} />
          <Route path="/contact" component={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
