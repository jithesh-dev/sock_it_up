import React from "react";
import HeroImage from "../../assets/img/Lobster-Hero.jpg";
import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      class="container hero"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div class="hero-text">
        <h1>RAMONES</h1>
        <h3 class="subtitle">RESPECT TO THE GODFATHERS OF PUNK</h3>
        <Link to="/catalog/ramones" class="btn no-bg-btn">
          Shop the Collection
        </Link>
      </div>
    </section>
  );
}

export default Hero;
