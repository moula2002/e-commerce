import React from "react";

function ProductCard({ product }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt={product.title}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.brand}</p>
        <p className="fw-bold">₹ {product.price}</p>
        <button className="btn btn-primary mt-auto">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
