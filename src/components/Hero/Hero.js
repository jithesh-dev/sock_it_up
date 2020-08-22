import React from "react";
// import HeroImage from "https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Library-Sites-StanceSharedLibrary/default/dw812deb55/2020/merch-banners-fa20/fa-20-socks-dual-performance-desktop.jpg?sw=1920&sh=1440&sm=fit";
import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="container hero"
      style={{
        backgroundImage: `url(https://www.stance.com/dw/image/v2/BBBN_PRD/on/demandware.static/-/Library-Sites-StanceSharedLibrary/default/dw812deb55/2020/merch-banners-fa20/fa-20-socks-dual-performance-desktop.jpg?sw=1440&sh=1440&sm=fit)`,
      }}
    >
      <div className="hero-text">
        <h1>RAMONES</h1>
        <h3 className="subtitle">RESPECT TO THE GODFATHERS OF PUNK</h3>
        <Link
          className="btn no-bg-btn"
          to={{
            pathname: "/catalog/ramones",
            state: {
              subtitle: "RESPECT TO THE GODFATHERS OF PUNK",
            },
          }}
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

export default Hero;
