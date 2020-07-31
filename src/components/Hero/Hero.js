import React from "react";
import HeroImage from "../../assets/img/Lobster-Hero.jpg";
import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="container hero"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="hero-text">
        <h1>RAMONES</h1>
        <h3 class="subtitle">RESPECT TO THE GODFATHERS OF PUNK</h3>
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
