import React, { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleShowCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
      <p className="cart-total">Total: {currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && <Button onClick={handleShowCheckout}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
}
