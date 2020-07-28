import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/home.pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Hero from "./components/Hero/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/checkout"></Route>
          <Route path="/login"></Route>
          <Route path="/">
            <HomePage />
            {/* <Hero /> */}
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
