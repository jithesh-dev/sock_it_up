import React from "react";
import { useParams } from "react-router-dom";
import "./catalog.style.scss";
import { sockCollection, kidsCollection } from "../../data/data";
import { ReactComponent as AddCartIcon } from "../../assets/svg/add-to-basket.svg";

function CatalogPage() {
  let { collection } = useParams();
  return (
    <div className="catalog">
      <h1 className="catalog__title">{collection}</h1>
      <h3 className="catalog__subtitle">SPRING / SUMMER 2020</h3>
      <div className="productGrid">
        {kidsCollection.map((product) => (
          <div className="product">
            <div className="product__image">
              <img src={product.image_1} alt="" />
            </div>

            <div className="product__info">
              <div>
                <p className="product__catagory">{product.catagory}</p>
                <p className="product__name">{product.name}</p>
                <span className="product__price">{product.price}</span>
              </div>
              <AddCartIcon className="product__button" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
