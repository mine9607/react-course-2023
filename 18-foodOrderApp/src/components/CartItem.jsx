import React from "react";
import { currencyFormatter } from "../utils/formatting";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function CartItem({ item }) {
  const cartCtx = useContext(CartContext);
  return (
    <li className="cart-item">
      <p>
        {item.name} - {item.quantity} X {currencyFormatter.format(item.price)}
      </p>
      <p className="cart-item-actions">
        <button type="button" onClick={() => cartCtx.removeItem(item.id)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button type="button" onClick={() => cartCtx.addItem(item)}>
          +
        </button>
      </p>
    </li>
  );
}
