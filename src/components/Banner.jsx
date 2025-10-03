import React from "react";
import img1 from "../assets/banner/mobile.jpg";
import img2 from "../assets/banner/home.jpg";
import img3 from "../assets/banner/bathroom-cleaner.png"; 
import img4 from "../assets/banner/books.jpg";
import "./Banner.css"; 

function Banner() {
  return (
    <div className="banner-container text-center">
      <div className="banner-text">
        <h2> Offer Mela Starting ✨</h2>
        <p>Get up to 80% off on Electronics, Fashion & More!</p>
      </div>

     
      <div
        id="carouselExampleControlsNoTouching"
        className="carousel slide carousel-custom"
        data-bs-ride="carousel"
        data-bs-touch="false"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Mobile" />
          </div>
           <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="Bathroom Cleaner"/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Books" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Bathroom Cleaner" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
