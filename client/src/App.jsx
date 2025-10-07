import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Components & Pages
import Header from "./components/Navbar";
import Footer from "./pages/Footer";
import HomePage from "./pages/Home"; // Home page contains all sections (DealsSection, CategoryPanel, etc.)
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./components/cartPage/CartPage";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      {/* ✅ Navbar visible on all pages except Admin Dashboard */}
      <Routes>
        {/* Admin Dashboard (no Navbar or Footer for clean layout) */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* All other pages include Navbar and Footer */}
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                {/* 🏠 Home Page */}
                <Route path="/" element={<HomePage />} />

                {/* 🛒 Product Details Page */}
                <Route path="/product/:id" element={<ProductDetailPage />} />

                {/* 🛍️ Cart Page */}
                <Route path="/cart" element={<CartPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
