import React from "react";
import "./home.style.scss";
import Hero from "../../components/Hero/Hero";
import Card from "../../components/Card/Card";
import FeaturedImageOne from "../../assets/img/featured-1.jpg";
import FeaturedImageTwo from "../../assets/img/featured-2.jpg";
import FeaturedImageThree from "../../assets/img/featured-3.jpg";
import FeaturedImageFour from "../../assets/img/featured-4.jpg";
import Product from "../../components/Product/Product";
import { Link } from "react-router-dom";
import { sockCollection } from "../../data/data";
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
      <section className="row container">
        <div className="featured-title">
          <h1>Trending</h1>
          <h3>Now</h3>
        </div>
        <div className="card-container">
          {sockCollection
            .sort(() => 0.5 - Math.random())
            .slice(0, 4)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                gender={product.gender}
                name={product.name}
                price={product.price}
                catagory={product.catagory}
                image_1={product.image_1}
              />
            ))}
        </div>
      </section>
      <section className="row container">
        <div className="featured-title">
          <h1>STAR WARS™</h1>
          <h3>THE EMPIRE STRIKES BACK</h3>
        </div>
        <div className="card-container">
          {sockCollection
            .filter((product) => product.catagory === "Star Wars infiknit")
            .slice(0, 4)
            .map((product) => (
              <Product
                key={product.id}
                id={product.id}
                gender={product.gender}
                name={product.name}
                price={product.price}
                catagory={product.catagory}
                image_1={product.image_1}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
