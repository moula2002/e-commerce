import React from "react";
import Banner from "../components/Banner";
import CategoryRow from "../components/CategoryRow";
import ProductList from "../components/ProductList";

function Home() {
  return (
    <div>
      <Banner />
      <div className="container mt-4">
        <CategoryRow />
        <ProductList />
      </div>
    </div>
  );
}

export default Home;
