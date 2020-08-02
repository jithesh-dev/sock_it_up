import React from "react";
import "./Header.scss";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Logo from "../../assets/img/logo.png";
import { ReactComponent as ShoppingCartIcon } from "../../assets/svg/shopping-cart.svg";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import { ReactComponent as AccountIcon } from "../../assets/svg/profile.svg";

function Header() {
  const [{ basket }] = useStateValue();
  const location = useLocation();

  return (
    <header className="container">
      <nav className="main-nav">
        <Link
          to={{
            pathname: "/catalog/men",
            state: {
              subtitle: "Cool 2020",
              gender: "Men",
            },
          }}
        >
          Men
        </Link>
        <Link
          to={{
            pathname: "/catalog/women",
            state: {
              subtitle: "Forever 21",
              gender: "Women",
            },
          }}
        >
          Women
        </Link>
        <Link
          to={{
            pathname: "/catalog/kids",
            state: {
              subtitle: "Naughty Socksie",
              gender: "Kids",
            },
          }}
        >
          Kids
        </Link>
        <Link
          to={{
            pathname: "/catalog/discover",
            state: {
              subtitle: "Look Around",
            },
          }}
        >
          Discover
        </Link>
      </nav>
      <Link className="logo" to="/">
        <img src={Logo} alt="" />
      </Link>
      <nav className="sec-nav">
        <Link to="#" className="header__link">
          <SearchIcon className="header__icon" />
        </Link>
        <Link
          to={{
            pathname: "/checkout",
            state: {
              from: location.pathname,
              gender: location.gender,
            },
          }}
          className="header__link"
        >
          <ShoppingCartIcon className="header__icon" />
          <span className="header__cartCount">{basket?.length}</span>
        </Link>
        <Link to="#">
          <AccountIcon className="header__icon" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
