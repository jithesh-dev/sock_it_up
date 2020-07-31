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
          <Link
            to={{
              pathname: "/catalog/pixar",
              state: {
                subtitle: "SPRING / SUMMER 2020",
              },
            }}
          >
            <Card
              title="Pixar"
              subtitle="Collection"
              imageUrl={FeaturedImageOne}
            />
          </Link>
          <Link
            to={{
              pathname: "/catalog/hysteria",
              state: {
                subtitle: "SPRING / SUMMER 2020",
              },
            }}
          >
            <Card
              title="Hysteria"
              subtitle="Collection"
              imageUrl={FeaturedImageTwo}
            />
          </Link>
          <Link
            to={{
              pathname: "/catalog/stance",
              state: {
                subtitle: "SPRING / SUMMER 2020",
              },
            }}
          >
            <Card
              title="Stance"
              subtitle="Collection"
              imageUrl={FeaturedImageThree}
            />
          </Link>
          <Link
            to={{
              pathname: "/catalog/bombai",
              state: {
                subtitle: "SPRING / SUMMER 2020",
              },
            }}
          >
            <Card
              title="Bombai"
              subtitle="Collection"
              imageUrl={FeaturedImageFour}
            />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
