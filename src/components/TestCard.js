import React, { useState } from "react";
import ProductCard from "./custom/productCards/ProductCard";
import { productData } from "../util/data";

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const index = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    const index = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="product-carousel">
      <button onClick={handlePrevClick}>Prev</button>
      <div className="product-carousel-cards">
        {productData.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            isActive={index === currentIndex}
          />
        ))}
      </div>
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ProductCarousel;
