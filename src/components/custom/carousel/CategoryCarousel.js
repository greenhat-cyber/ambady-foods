import React from "react";
import "./MainCarousel.css";
const CategoryCarousel = (props) => {
  return (
    <div className="category-body shadow-sm">
      <div className="circle-bg shadow-sm">
        <img
          className="w-75  "
          src={props.products}
          alt="im"
        />
      </div>
      <p className="pt-2">{props.title}</p>
    </div>
  );
};

export default CategoryCarousel;
