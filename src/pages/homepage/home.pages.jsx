import React from "react";
import "./home.style.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import FeaturedImageOne from "../../assets/img/featured-1.jpg";
import FeaturedImageTwo from "../../assets/img/featured-2.jpg";
import FeaturedImageThree from "../../assets/img/featured-3.jpg";
import FeaturedImageFour from "../../assets/img/featured-4.jpg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home">
      <Hero />
      <section className="row container">
        <div className="featured-title">
          <h1>Featured</h1>
          <h3>Collections</h3>
        </div>
        <div className="card-container">
          <Link to="/catalog/pixar">
            <Card
              title="Pixar"
              subtitle="Collection"
              imageUrl={FeaturedImageOne}
            />
          </Link>
          <Link to="/catalog/hysteria">
            <Card
              title="Hysteria"
              subtitle="Collection"
              imageUrl={FeaturedImageTwo}
            />
          </Link>
          <Card
            title="Stance"
            subtitle="Collection"
            imageUrl={FeaturedImageThree}
          />
          <Card
            title="Bombai"
            subtitle="Collection"
            imageUrl={FeaturedImageFour}
          />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
