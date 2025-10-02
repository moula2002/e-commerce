import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // API returns { products: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center my-5">Loading products...</p>;
  }

  return (
    <div className="container py-4">
      <div className="row">
        {products.map((p) => (
          <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={p.id}>
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
