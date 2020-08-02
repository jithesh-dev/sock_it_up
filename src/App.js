import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/homepage/home.pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatalogPage from "./pages/catagory/catalog.pages";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/checkout/checkout.pages";
import "./App.scss";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ToastContainer />
      <div className="App">
        <Header />
        <Switch>
          <Route path="/catalog/:collection" children={<CatalogPage />} />
          <Route path="/checkout">
            <Checkout />
          </Route>
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
