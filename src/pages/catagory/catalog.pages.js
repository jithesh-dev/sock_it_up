import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import "./catalog.style.scss";
import { sockCollection } from "../../data/data";
import Product from "../../components/Product/Product";

function CatalogPage() {
  let { collection } = useParams();
  const location = useLocation();
  const [filteredSocks, setFilteredSocks] = useState([]);
  useEffect(() => {
    setFilteredSocks(
      sockCollection.filter((product) => {
        if (collection.toUpperCase() === "DISCOVER") return product;

        if (location?.state?.gender)
          return (
            product.gender.toUpperCase() ===
            location?.state?.gender.toUpperCase()
          );
        else if (collection)
          return product.catagory.toUpperCase() === collection.toUpperCase();
        return 0;
      })
    );
  }, [location, collection]);

  return (
    <div className="catalog">
      <h1 className="catalog__title">{collection}</h1>
      <h3 className="catalog__subtitle">{location?.state?.subtitle}</h3>

      <div className="productGrid">
        {filteredSocks?.map((product) => (
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
    </div>
  );
}

export default CatalogPage;
