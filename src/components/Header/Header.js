import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { ReactComponent as ShoppingCartIcon } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as AccountIcon } from "../../assets/svg/profile.svg";

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
        <Link to="#" className="header__link">
          <SearchIcon className="header__icon" />
        </Link>
        <Link to="#" className="header__link">
          <ShoppingCartIcon className="header__icon" />
          <span className="header__cartCount">1</span>
        </Link>
        <Link to="#">
          <AccountIcon className="header__icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
