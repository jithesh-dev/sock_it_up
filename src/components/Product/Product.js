import React from "react";
import { ReactComponent as AddCartIcon } from "../../assets/svg/add-to-basket.svg";
import "./Product.scss";
import { useStateValue } from "../../StateProvider";
import { toast } from "react-toastify";

function Product({ id, name, price, catagory, image_1, gender }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    if (basket.find((product) => product.id === id)) {
      dispatch({
        type: "ADD_QTY",
        id: id,
      });

      toast.dark(`${name} quantity updated`);
    } else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: { id, name, catagory, price, image_1, gender, qty: 1 },
      });
      toast.dark(`${name}  added to basket`);
    }
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
