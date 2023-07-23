import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.discountedPrice, 0);
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.discountedPrice.toFixed(2)}{" "}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total Price: ${getTotalPrice().toFixed(2)}</p>
      <Link to="/checkout">
        <button>Go to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
