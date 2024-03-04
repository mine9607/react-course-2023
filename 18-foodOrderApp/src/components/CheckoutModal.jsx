import React from "react";

// a modal for the checkout form should be displayed when the user clicks on the "Checkout" button
export default function CheckoutModal() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <div>Checkout</div>
      <p>Total amount ${total}</p>
      <form onSubmit={""}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="address">Street Address</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" required />
        <label htmlFor="post-code">Postal Code</label>
        <input type="number" id="post-code" name="post-code" required />
        <button type="button"></button>
        <button type="button">Submit order</button>
      </form>
    </>
  );
}
