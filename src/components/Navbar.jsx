import React from 'react';
import '../css/navbar.scss';

function Navbar() {
  return (
    <div className="landing-page">
      <div className="container">
        <div className="header-area">
          <div className="logo">
            {/* eslint-disable */}
            Your <b>Website</b>
          </div>
          <ul className="links">
            <li>Home</li>
            <li>About Us</li>
            <li>Work</li>
            <li>Info</li>
            <li>Get Started</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
