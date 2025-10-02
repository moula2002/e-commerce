import { createSlice } from "@reduxjs/toolkit";
import iphone14 from "../assets/searchBar/iphone14.png";
import samsung from "../assets/searchBar/samsung.png";
import airpods from "../assets/searchBar/airpods.png";
import macbook from "../assets/searchBar/macbook.jpg";
import smartwatch from "../assets/searchBar/smartwatch.png";
import headphone from "../assets/searchBar/headphone.webp";

export const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    price: 79000,
    mrp: 85000,
    discount: 7,
    rating: 4.5,
    reviews: 1200,
    deliveryDate: "27 Sep 2025",
    description: "Latest iPhone with A15 Bionic chip and dual camera.",
    offer: "Get extra 5% off with HDFC Bank cards.",
    image: iphone14,
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: 49000,
    mrp: 52000,
    discount: 6,
    rating: 4.3,
    reviews: 950,
    deliveryDate: "28 Sep 2025",
    description: "Samsung flagship phone with excellent camera and battery.",
    offer: "Bank offer: 10% cashback.",
    image: samsung,
  },
  {
    id: 3,
    name: "Airpods",
    price: 12000,
    mrp: 13000,
    discount: 8,
    rating: 4.7,
    reviews: 500,
    deliveryDate: "29 Sep 2025",
    description: "Apple Airpods with noise cancellation and long battery life.",
    offer: "Free shipping available.",
    image: airpods,
  },
  {
    id: 4,
    name: "Macbook",
    price: 125000,
    mrp: 135000,
    discount: 7,
    rating: 4.8,
    reviews: 300,
    deliveryDate: "30 Sep 2025",
    description: "Apple Macbook with M2 chip, lightweight and fast.",
    offer: "Get 1-year AppleCare free.",
    image: macbook,
  },
  {
    id: 5,
    name: "Smart Watch",
    price: 14000,
    mrp: 15500,
    discount: 10,
    rating: 4.2,
    reviews: 600,
    deliveryDate: "1 Oct 2025",
    description: "Smart watch with fitness tracking and notifications.",
    offer: "Buy 1 get 1 strap free.",
    image: smartwatch,
  },
  {
    id: 6,
    name: "Head Phone",
    price: 30000,
    mrp: 32000,
    discount: 6,
    rating: 4.4,
    reviews: 400,
    deliveryDate: "2 Oct 2025",
    description: "High-quality wireless headphone with deep bass.",
    offer: "Extra 5% off on prepaid orders.",
    image: headphone,
  },
];

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: products,
    searchQuery: "",
    searchResults: [],
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.searchResults = action.payload
        ? state.allProducts.filter((p) =>
            p.name.toLowerCase().includes(action.payload.toLowerCase())
          )
        : [];
    },
  },
});

export const { setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
