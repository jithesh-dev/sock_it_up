import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import "./checkout.style.scss";
import { ReactComponent as Arrow } from "../../assets/svg/arrow-right.svg";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import OrderSummary from "../../components/OrderSummary/OrderSummary";

function Checkout() {
  const [{ basket }] = useStateValue();
  const location = useLocation();

  return (
    <div className="checkout container">
      <div className="checkout__leftside">
        <h1 className="checkout__title">Shopping Bag</h1>
        <Link className="checkout__backLink" to={location?.state?.from}>
          <Arrow />
          Continue Shopping
        </Link>
        <div className="checkout__orderContainer">
          {basket?.length > 0 ? (
            basket?.map((product) => (
              <CheckoutProduct
                key={product.id}
                id={product.id}
                gender={product.gender}
                name={product.name}
                price={product.price}
                catagory={product.catagory}
                image_1={product.image_1}
                qty={product.qty}
              />
            ))
          ) : (
            <div className="emptyCartCard">
              <h3>No eggs in the basket..!!! Get Some</h3>
            </div>
          )}
        </div>
      </div>

      <div className="checkout__rightside">
        <OrderSummary />
      </div>
    </div>
  );
}

export default Checkout;
