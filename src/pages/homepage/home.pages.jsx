import React from "react";
import "./home.style.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import FeaturedImageOne from "../../assets/img/featured-1.jpg";
import FeaturedImageTwo from "../../assets/img/featured-2.jpg";
import FeaturedImageThree from "../../assets/img/featured-3.jpg";
import FeaturedImageFour from "../../assets/img/featured-4.jpg";

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
          <Card title="Pixar Collection" imageUrl={FeaturedImageOne} />
          <Card title="Hysteria Collection" imageUrl={FeaturedImageTwo} />
          <Card title="Stance Collection" imageUrl={FeaturedImageThree} />
          <Card title="Bombai Collection" imageUrl={FeaturedImageFour} />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
