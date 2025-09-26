import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLocation } from "../redux/store";  
import { Navbar, Nav, Form, FormControl, Button, Dropdown } from "react-bootstrap";
import "../components/Navbar.jsx";  

export default function Header() {
  const dispatch = useDispatch();
  const { location, cartCount } = useSelector((state) => state.header);

  const changeLocation = () => {
    const newLoc = prompt("Enter new location:", location);
    if (newLoc) dispatch(setLocation(newLoc)); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="amazon-header px-3 sticky-top">
      <Navbar.Brand href="#">
        <span className="amazon-logo">E-commerce<span>.in</span></span>
      </Navbar.Brand>

      <div className="text-white ms-3 location" onClick={changeLocation} style={{ cursor: "pointer" }}>
        Delivering to <strong>{location}</strong>
      </div>

      <Form className="d-flex mx-auto search-bar">
        <FormControl type="search" placeholder="Search Product.in" className="me-2" />
        <Button variant="warning">🔍</Button>
      </Form>

      <Dropdown className="me-3">
        <Dropdown.Toggle variant="secondary">EN</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item> தமிழ்-TA</Dropdown.Item>
          <Dropdown.Item> മലയാളം-ML</Dropdown.Item>
          <Dropdown.Item> తెలుగు-TE</Dropdown.Item>
          <Dropdown.Item> ಕನ್ನಡ-KN</Dropdown.Item>
          <Dropdown.Item> मराठी-MR</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Nav>
        <Nav.Link className="text-white">Account & Lists</Nav.Link>
        <Nav.Link className="text-white">Returns & Orders</Nav.Link>
        <Nav.Link className="text-white">
          🛒 Cart <span className="cart-count">{cartCount}</span>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
