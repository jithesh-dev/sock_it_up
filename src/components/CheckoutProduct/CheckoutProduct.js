import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

import { ReactComponent as Trash } from "../../assets/svg/trash.svg";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ id, name, price, catagory, image_1, gender, qty }) {
  const [{ basket }, dispatch] = useStateValue();
  const [prodQty, setQty] = useState(qty);

  const addQty = () => {
    dispatch({
      type: "ADD_QTY",
      id: id,
    });
    setQty(basket.find((prod) => prod.id === id).qty);
  };

  const minusQty = () => {
    dispatch({
      type: "MINUS_QTY",
      id: id,
    });
    setQty(basket.find((prod) => prod.id === id).qty);
  };

  const delItem = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkout__order">
      <div className="checkout__img">
        <img src={image_1} alt="" />
      </div>
      <div className="checkout__info">
        <h3 className="checkout__orderName">{name}</h3>
        <p className="checkout__catagory">
          {catagory} / {gender}
        </p>
        <p className="checkout__size">
          <strong>Size:</strong> L
        </p>
        <p className="checkout__price">${price}</p>
      </div>
      <div className="checkout__totPrice">
        <h5>Total Price</h5>
        <h3>
          <CurrencyFormat
            decimalScale={2}
            value={price * prodQty}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </h3>
      </div>
      <div className="checkout__qtyBox">
        <button
          className="checkout__minusButton checkout__qtyButton"
          onClick={minusQty}
        >
          -
        </button>
        <span className="checkout__qty">{prodQty}</span>
        <button
          className="checkout__plusButton checkout__qtyButton"
          onClick={addQty}
        >
          +
        </button>
      </div>

      <Trash onClick={delItem} className="checkout__delBtn " />
    </div>
  );
}

export default CheckoutProduct;
