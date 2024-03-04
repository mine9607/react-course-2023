import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  // Option 1 for Handling side effects in a component using Redux
  // Similar to using Context create a copy of the current state
  // update the newly created state and then after send the HTTP to replace the existing state in the database

  // note: never update redux state outside a reducer

  function handleAddToCart() {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
