import React from 'react';

const NavigationBar = () => {
  return (
    <nav className='navbar'>
      {/* Placeholder logo */}
      <div className="logo">Little Lemon</div>
      {/* Navigation links */}
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#order">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;