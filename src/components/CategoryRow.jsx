import React from "react";
import kitchen from "../assets/catagoryRow/kitchen.jpg";
import Electronic from "../assets/catagoryRow/Electronic.png";
import Mobiles from "../assets/catagoryRow/mobiles.png";
import Fashion from "../assets/catagoryRow/fashion.png";

function CategoryRow() {
  const categories = [
    { title: "Home & Kitchen", img: kitchen },
    { title: "Electronics", img: Electronic },
    { title: "Mobiles", img: Mobiles },
    { title: "Fashion", img: Fashion },
  ];

  return (
    <div className="row text-center mb-4">
      {categories.map((cat, idx) => (
        <div className="col-md-3" key={idx}>
          <div className="card p-3">
            <img
              src={cat.img}
              className="card-img-top"
              alt={cat.title}
              style={{
                height: "200px",      
                objectFit: "cover",   
              }}
            />
            <div className="card-body">
              <h6>{cat.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryRow;
