import React from 'react';

const HeroSection = () => {
  return (
    <div className="hero-section ">
      <h2>The Little Lemon</h2>
      <p>Chicago</p>
      <p></p>
      <button onClick={() => handleBookTableClick()}>Book a Table</button>
    </div>
  );
}

const handleBookTableClick = () => {
  // Implement navigation to the page for booking a table
}

export default HeroSection;