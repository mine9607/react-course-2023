import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/cart-actions";
// -----import for action creator approach-----
// import { uiActions } from "./store/uiSlice";
// -----import for action creator approach-----
let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const show = useSelector((state) => state.ui.showCart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    // ----------action creator approach----------
    // const url = "https://react-redux-8f26c-default-rtdb.firebaseio.com/cart.json";
    // const config = {
    //   method: "PUT",
    //   body: JSON.stringify(cart),
    // };
    // const sendCartData = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data.",
    //     })
    //   );
    //   try {
    //     const response = await fetch(url, config);
    //     if (!response.ok) {
    //       throw new Error("Sending cart data failed.");
    //     }
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "Success!",
    //         message: "Sent cart data successfully.",
    //       })
    //     );
    //   } catch (error) {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error!",
    //         message: "Sending cart data failed.",
    //       })
    //     );
    //   }
    // };
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // sendCartData();
    // ----------action creator approach----------
    // ----------action thunk approach----------
    if (isInitial) {
      dispatch(fetchCartData());
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification status={notification.status} title={notification.title} message={notification.message} />
      )}
      <Layout>
        {show && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
