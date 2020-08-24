import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import "./OrderSummary.scss";

function OrderSummary() {
  const [{ basket }] = useStateValue();
  const [itemNos, setItemNos] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    setItemNos(basket?.reduce((a, b) => a + (b["qty"] || 0), 0));
    setSubtotal(basket?.reduce((a, b) => a + (b["qty"] * b["price"] || 0), 0));
  }, [basket]);

  return (
    <div className="cartSummary">
      <h3 className="cartSummary__title">ORDER SUMMARY</h3>

      <table>
        <tbody>
          <tr>
            <td className="cartSummary__label">Items</td>
            <td className="cartSummary__content">{itemNos}</td>
          </tr>
          <tr>
            <td className="cartSummary__label">Shipping</td>
            <td className="cartSummary__content">Free</td>
          </tr>
          <tr>
            <td className="cartSummary__label">Subtotal</td>
            <td className="cartSummary__content">
              <CurrencyFormat
                decimalScale={2}
                value={subtotal}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="btn cartSummary__btn">Checkout</button>
    </div>
  );
}

export default OrderSummary;
