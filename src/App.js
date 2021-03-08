import "./App.scss";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Careers from "./components/Careers";
import NewsandMedia from "./components/NewsandMedia";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import { Route, Router, Switch } from "react-router-dom";
import History from "./components/History";

function App() {
  return (
    <div className="App">
      <Header />
      <Router history={History}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Products" component={Products} />
          <Route exact path="/Technology" component={Technology} />
          <Route exact path="/Careers" component={Careers} />
          <Route exact path="/NewsandMedia" component={NewsandMedia} />
          <Route exact path="/Partners" component={Partners} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
