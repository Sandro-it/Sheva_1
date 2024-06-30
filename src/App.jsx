import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BiographyPage from "./pages/BiographyPage";
import WorksPage from "./pages/WorksPage";
import ContactPage from "./pages/ContactPage";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/biography" component={BiographyPage} />
          <Route path="/works" component={WorksPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
