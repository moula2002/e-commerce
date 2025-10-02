import React from "react";
import "./CartPage.css";
import cartImage from "../../assets/cart/cartimage.png";

const EmptyCart = () => {
  return (
    <div className="cart-empty-container">
      <div className="cart-empty-image">
        <img src={cartImage} alt="Empty Cart" />
      </div>

      <h2>Your Cart is empty</h2>
      <p className="shop-deals">Shop today’s deals</p>

      <div className="cart-empty-buttons">
        <button className="signin-btn">Sign in</button>
        <button className="signup-btn">Sign up</button>
      </div>

      <p className="cart-empty-footer">
        The price and availability of items are subject to change. The shopping
        cart is a temporary place to store a list of your items and reflects
        each item's most recent price.
      </p>
    </div>
  );
};

export default EmptyCart;
