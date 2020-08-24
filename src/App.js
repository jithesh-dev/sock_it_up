import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/homepage/home.pages";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CatalogPage from "./pages/catagory/catalog.pages";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/checkout/checkout.pages";
import Login from "./pages/login/login.pages";
import "./App.scss";
import db, { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  function getDB(uid) {
    // try {
    let items = [];
    // const unsubscribe = db
    //   .collection("users")
    //   .doc(uid)
    //   .collection("cartItems")
    //   .onSnapshot((snapshot) =>
    //     snapshot.docs.map((doc) => items.push({...doc.data()}))
    //   );
    const unsubscribe = db
      .collection("users")
      .doc(uid)
      .collection("cartItems")
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => items.push({ ...doc.data(), pid: doc.id }))
      );

    // console.log(snap.docs);
    dispatch({
      type: "SET_BASKET",
      items: items,
    });
    // } catch (err) {
    //   console.log("fetch failed", err);
    // }
    return () => unsubscribe();
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((usr) => {
      dispatch({
        type: "SET_USER",
        user: usr,
      });

      usr && getDB(usr.uid);
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

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
          <Route path="/login">
            <Login />
          </Route>
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
