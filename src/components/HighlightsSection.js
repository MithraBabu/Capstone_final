import React from 'react';

const HighlightsSection = () => {
  const dishes = [
    { name: "Dish 1", description: "Description of Dish 1", price: "$10", image: "dish1.jpg" },
    { name: "Dish 2", description: "Description of Dish 2", price: "$12", image: "dish2.jpg" },
    // Add more dishes as needed
  ];

  return (
    <div className="highlights-section">
      <h2>Weekly Specials</h2>
      <div className="dishes-container">
        {dishes.map((dish, index) => (
          <div className="dish" key={index}>
            <img src={dish.image} alt={dish.name} />
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.price}</p>
            <button onClick={() => handleDishClick(dish)}>Order Now</button>
          </div>
        ))}
      </div>
      <button className="order-online-button" onClick={() => handleOrderOnlineClick()}>Order Online</button>
    </div>
  );
}

const handleDishClick = (dish) => {
  // Implement navigation to the page for ordering the selected dish
}

const handleOrderOnlineClick = () => {
  // Implement navigation to the order online page
}

export default HighlightsSection;