import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchQuery } from "../../redux/productsSlice";
import "./SearchBar.css";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state) => state.products.searchQuery);
  const results = useSelector((state) => state.products.searchResults);

  const handleChange = (e) => dispatch(setSearchQuery(e.target.value));
  const handleClick = (id) => {
    dispatch(setSearchQuery(""));
    navigate(`/product/${id}`);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search products..."
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
  );
}

export default SearchBar;
