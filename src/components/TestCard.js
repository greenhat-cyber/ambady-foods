import React, { useState } from 'react';

const categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

const CardSwiper = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardSwipe = () => {
    // Simulated card swipe event
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    setSelectedCategory(randomCategory);
  };

  return (
    <div>
      <h1>Custom Category Card Swiper</h1>
      <button onClick={handleCardSwipe}>Swipe Card</button>
      {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
    </div>
  );
};

export default CardSwiper;
