import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          {/* Placeholder logo */}
          <img src="logo.png" alt="Little Lemon Logo" />
        </div>
        <div className="contact-details">
          {/* Placeholder contact details */}
          <p>1234 Main Street, City, Country</p>
          <p>Email: info@littlelemon.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
        <div className="social-media-links">
          {/* Placeholder social media links */}
          <a href="#facebook"><i className="fa fa-facebook"></i></a>
          <a href="#twitter"><i className="fa fa-twitter"></i></a>
          <a href="#instagram"><i className="fa fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;