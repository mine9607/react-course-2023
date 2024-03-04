import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const url = "https://react-redux-8f26c-default-rtdb.firebaseio.com/cart.json";
    const config = {
      method: "PUT",
      body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }),
    };

    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );
    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const url = "https://react-redux-8f26c-default-rtdb.firebaseio.com/cart.json";
    // const config = {
    //   method: "GET",
    // };
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Fetching cart data failed.");
      }
      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed.",
        })
      );
    }
  };
};
