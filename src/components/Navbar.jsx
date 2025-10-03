import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../redux/store";
import { setSearchQuery } from "../redux/productsSlice";
import { Navbar, Nav, Button, Modal } from "react-bootstrap";
import AuthPage from "../pages/LoginPage";
import SecondHeader from "./searchBar/SecondHeader";
import "./Navbar.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { location } = useSelector((state) => state.header);
  const cartItems = useSelector((state) => state.cart?.items || []);
  const cartCount = cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const query = useSelector((state) => state.products.searchQuery);
  const results = useSelector((state) => state.products.searchResults || []);

  const [showAuthModal, setShowAuthModal] = useState(false);

  const openAuthModal = () => setShowAuthModal(true);
  const closeAuthModal = () => setShowAuthModal(false);

  const changeLocation = () => {
    const newLoc = prompt("Enter new location:", location);
    if (newLoc) dispatch(setLocation(newLoc));
  };

  const handleSearchChange = (e) => dispatch(setSearchQuery(e.target.value));

  const handleClick = (id) => {
    dispatch(setSearchQuery(""));
    navigate(`/product/${id}`);
  };

  const goToCart = () => navigate("/cart");

  return (
    <>
      {/* Top Navbar */}
      <Navbar className="navbar-custom px-3 sticky-top" expand="lg">
        <Navbar.Brand href="#" className="navbar-brand-custom">
          <span className="brand-white">E-commerce</span>
          <span className="brand-orange">.in</span>
        </Navbar.Brand>

        <div className="text-white ms-3 location" style={{ cursor: "pointer" }} onClick={changeLocation}>
          Delivering to <strong>{location}</strong>
        </div>

        <div className="mx-auto search-bar-container">
          <input
            type="text"
            value={query}
            onChange={handleSearchChange}
            placeholder="Search Product.in"
            className="search-input"
          />
          {results.length > 0 && (
            <ul className="search-results">
              {results.map((item) => (
                <li key={item.id} className="search-item" onClick={() => handleClick(item.id)}>
                  <img src={item.image} alt={item.name} className="search-item-img" />
                  <div>
                    <div>{item.name}</div>
                    <small>{item.price}</small>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Nav className="ms-auto align-items-center">
          <Button variant="outline-light" className="me-3 account-btn" onClick={openAuthModal}>
            Account
          </Button>
          <Nav.Link className="text-white">Returns & Orders</Nav.Link>
          <Nav.Link className="text-white" onClick={goToCart} style={{ cursor: "pointer" }}>
            🛒 Cart <span className="cart-count">{cartCount}</span>
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Bottom Menu */}
      <SecondHeader />

      {/* Auth Modal */}
      <Modal show={showAuthModal} onHide={closeAuthModal} centered>
        <Modal.Body>
          <AuthPage onClose={closeAuthModal} />
        </Modal.Body>
      </Modal>
    </>
  );
}
