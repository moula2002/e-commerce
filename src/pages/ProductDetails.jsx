
import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { products } from "../redux/productsSlice";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <div className="not-found">Product not found</div>;

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate("/cart");
  };

  const keyword = product.name.split(" ")[0].toLowerCase();
  const relatedProducts = products.filter(
    (p) => p.id !== product.id && p.name.toLowerCase().includes(keyword)
  );

  return (
    <div className="details-container">
      <h2 className="details-title">{product.name}</h2>
      <div className="details-content">
        <img src={product.image} alt={product.name} className="details-image" />
        <div className="details-info">
          <p className="details-rating">
            <span className="stars">
              {"★".repeat(Math.floor(product.rating))}
              {"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="reviews">({product.reviews.toLocaleString()} ratings)</span>
          </p>

          <p className="details-price">
            {formatPrice(product.price)}{" "}
            <span className="mrp">{formatPrice(product.mrp)}</span>{" "}
            <span className="discount">({product.discount}% off)</span>
          </p>

          <p className="offer">{product.offer}</p>
          <p className="delivery">
            FREE delivery <b>{product.deliveryDate}</b>
          </p>
          <p className="description">{product.description}</p>

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="related-grid">
            {relatedProducts.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`} className="related-item">
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{formatPrice(item.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
