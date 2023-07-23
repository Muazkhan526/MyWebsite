import React from "react";
import { Link } from "react-router-dom";

const Checkout = ({ cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.discountedPrice, 0);
  };

  return (
    <div className="checkout">
      <h2>Checkout Page</h2>
      {/* Implement your checkout form and process here */}
      <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default Checkout;
