import React from "react";
import { ReactComponent as AddCartIcon } from "../../assets/svg/add-to-basket.svg";
import "./Product.scss";
import { useStateValue } from "../../StateProvider";
import { toast } from "react-toastify";
import db from "../../firebase";

function Product({ id, name, price, catagory, image_1, gender }) {
  const [{ basket, user }, dispatch] = useStateValue();

  async function addToBasket() {
    // const uid = basket.find((product) => product.id === id).uid;

    if (basket.find((product) => product.id === id)) {
      dispatch({
        type: "ADD_QTY",
        id: id,
      });

      toast.dark(`${name} quantity updated`);
    } else {
      toast.dark(`${name}  added to basket`);
      let pid = null;
      if (user) {
        const res = await db
          .collection("users")
          .doc(user.uid)
          .collection("cartItems")
          .add({ id, name, catagory, price, image_1, gender, qty: 1 });
        pid = res.id;
      }

      dispatch({
        type: "ADD_TO_BASKET",
        item: { pid, id, name, catagory, price, image_1, gender, qty: 1 },
      });
    }
  }

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
        <AddCartIcon
          className="product__button"
          onClick={() => addToBasket()}
        />
      </div>
    </div>
  );
}

export default Product;
