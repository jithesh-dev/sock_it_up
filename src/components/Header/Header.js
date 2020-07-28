import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

function Header() {
  return (
    <header className="container">
      <nav className="main-nav">
        <Link to="#">Men</Link>
        <Link to="#">Women</Link>
        <Link to="#">Kids</Link>
        <Link to="#">Discover</Link>
      </nav>
      <Link className="logo" to="">
        <img src={Logo} alt="" />
      </Link>
      <nav className="sec-nav">
        <Link to="#">Find Products</Link>
        <Link to="#">Cart</Link>
        <Link to="#">Login/Signup</Link>
      </nav>
    </header>
  );
}

export default Header;
