import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLocation } from "../redux/store";
import { setSearchQuery } from "../redux/productsSlice";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import AccountsLists from "./AccountsLists/AccountsLists"; // import your component
import "./Navbar.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { location } = useSelector((state) => state.header);
  const cartItems = useSelector(
    (state) => (state.cart && state.cart.items ? state.cart.items : [])
  );
  const cartCount = Array.isArray(cartItems)
    ? cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  const query = useSelector((state) => state.products.searchQuery);
  const results = useSelector((state) => state.products.searchResults);

  const [showAccounts, setShowAccounts] = useState(false); // state to toggle accounts list

  const changeLocation = () => {
    const newLoc = prompt("Enter new location:", location);
    if (newLoc) dispatch(setLocation(newLoc));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleClick = (id) => {
    dispatch(setSearchQuery(""));
    navigate(`/product/${id}`);
  };

  const goToCart = () => navigate("/cart");

  return (
    <Navbar className="navbar-custom px-3 sticky-top" expand="lg">
      <Navbar.Brand href="#" className="navbar-brand-custom">
        E-commerce<span>.in</span>
      </Navbar.Brand>

      <div
        className="text-white ms-3 location"
        onClick={changeLocation}
        style={{ cursor: "pointer" }}
      >
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
              <li
                key={item.id}
                className="search-item"
                onClick={() => handleClick(item.id)}
              >
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

      <Dropdown className="me-3">
        <Dropdown.Toggle variant="secondary">EN</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>தமிழ்-TA</Dropdown.Item>
          <Dropdown.Item>മലയാളം-ML</Dropdown.Item>
          <Dropdown.Item>తెలుగు-TE</Dropdown.Item>
          <Dropdown.Item>ಕನ್ನಡ-KN</Dropdown.Item>
          <Dropdown.Item>मराठी-MR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Nav>
        {/* Account & Lists */}
        <div
          className="text-white position-relative me-3"
          onMouseEnter={() => setShowAccounts(true)}
          onMouseLeave={() => setShowAccounts(false)}
          style={{ cursor: "pointer" }}
        >
          Account & Lists
          {showAccounts && (
            <div
              className="accounts-lists-dropdown position-absolute"
              style={{ top: "100%", left: 0, zIndex: 1000 }}
            >
              <AccountsLists />
            </div>
          )}
        </div>

        <Nav.Link className="text-white">Returns & Orders</Nav.Link>
        <Nav.Link
          className="text-white"
          onClick={goToCart}
          style={{ cursor: "pointer" }}
        >
          🛒 Cart <span className="cart-count">{cartCount}</span>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
