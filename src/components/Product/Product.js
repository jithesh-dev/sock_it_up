import React from "react";
import { ReactComponent as AddCartIcon } from "../../assets/svg/add-to-basket.svg";
import "./Product.scss";
import { useStateValue } from "../../StateProvider";

function Product({ id, name, price, catagory, image_1, gender }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, name, catagory, price, image_1 },
    });
  };
  return (
    <div className="product">
      <div className="product__image">
        <img src={image_1} alt="" />
      </div>

      <div className="product__info">
        <div>
          <p className="product__catagory">
            {catagory} / {gender}
          </p>
          <p className="product__name">{name}</p>
          <span className="product__price">${price}</span>
        </div>
        <AddCartIcon className="product__button" onClick={addToBasket} />
      </div>
    </div>
  );
}

export default Product;
