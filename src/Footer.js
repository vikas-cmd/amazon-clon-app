import React from 'react';
import './Footer.css';

const Footer = () => {
    return <div>
        <footer className="footer">
  <div className="footer-container">
    <div className="footer-links">
      <a href="#">Sell on Amazon</a>
      <a href="#">Advertise Your Products</a>
      <a href="#">Independently Publish with Us</a>
      <a href="#">Amazon Pay</a>
      <a href="#">Amazon Business</a>
      <a href="#">Let Us Help You</a>
    </div>
    <div className="footer-social">
      <a href="#"><i className="fab fa-facebook-f"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2023 Amazon.com. All rights reserved.</p>
  </div>
</footer>

    </div>;
}

export default Footer;