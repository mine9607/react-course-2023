import React from "react";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import { useContext } from "react";
import CartContext from "../store/CartContext";

export default function ItemCard({ product }) {
  const cartCtx = useContext(CartContext);
  const handleAddToCart = () => {
    // add the product to the cart
    cartCtx.addItem(product);
  };

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${product.image}`} alt="product image" />
        <div>
          <h3>{product.name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(product.price)}</p>
          <p className="meal-item-description">{product.description}</p>
        </div>
        <p className="meal-items-actions">
          <Button onClick={handleAddToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
}
