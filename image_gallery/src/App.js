import "./App.css";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route
            path="/code"
            component={() => {
              window.location.href =
                "https://github.com/sidpanhale/I-Galleria.git";
              return null;
            }}
          />

          <Route
            path="/facebook"
            component={() => {
              window.location.href = "https://www.facebook.com";
              return null;
            }}
          />

          <Route
            path="/twitter"
            component={() => {
              window.location.href = "https://www.twitter.com";
              return null;
            }}
          />

          <Route
            path="/instagram"
            component={() => {
              window.location.href = "https://www.instagram.com";
              return null;
            }}
          />

          <Route
            path="/linkedin"
            component={() => {
              window.location.href = "https://www.linkedin.com";
              return null;
            }}
          />

          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
