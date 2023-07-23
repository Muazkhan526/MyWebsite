import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductSlider from "../MoreProducts/MoreProduct";
import "./ProductData.css";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}{" "}
            <button className="Remove" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ProductData() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="App">
      <ProductSlider addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ProductData;
