import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="Footer">
      <small>Meeka Spivey - Copyright {currentYear}</small>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/#/about">About</a></li>
      </ul>
    </div>
  );
}

export default Footer;