import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/home.pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatalogPage from "./pages/catagory/catalog.pages";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/catalog/:collection" children={<CatalogPage />} />
          <Route path="/checkout"></Route>
          <Route path="/login"></Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
