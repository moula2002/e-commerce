import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import CategoryRow from "./components/CategoryRow";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="container mt-4">
        <CategoryRow />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
