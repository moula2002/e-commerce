import React from "react";
import ProductCard from "./ProductCard";
import iphone14 from "../assets/productList/iphone14.png"
import laptops from "../assets/productList/laptops.png"
import headphone from "../assets/productList/headphone.png"
import smartwatch from "../assets/productList/smartwatch.png"

const products = [
  { id: 1, name: "iPhone 14", price: 79999, img: iphone14},
  { id: 2, name: "Laptop", price: 49999, img: laptops},
  { id: 3, name: "Headphones", price: 1999, img: headphone},
  { id: 4, name: "Smartwatch", price: 5999, img: smartwatch},
];

function ProductList() {
  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-md-3 mb-3" key={p.id}>
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
