import { Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage = lazy(() => import("./pages/HomePage"));
import BiographyPage from "./pages/BiographyPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact component={<HomePage/>} />
          <Route path="/biography" component={<BiographyPage/>} />
          <Route path="/works" component={<WorksPage/>} />
          <Route path="/contact" component={<ContactPage/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
