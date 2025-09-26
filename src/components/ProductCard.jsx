import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card h-100 text-center">
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p>₹{product.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
