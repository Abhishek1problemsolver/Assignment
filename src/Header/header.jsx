// Header.js
import React, { useState } from 'react';
import './header.css'; // Import the CSS file

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
    <div className='navbar'>
     <div className="logo">
        <img
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt="Logo"
          className="logo-img"
        />
      </div>
      <nav className={showMenu ? 'nav-active' : ''}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${showMenu ? 'active' : ''}`}>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        <ul>
        <li><a href="#features">Features</a></li>
          <li><a href="#Faq">FAQ</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="https://templatesunit.lemonsqueezy.com/checkout">Buy Template</a></li>
        </ul>
      </nav>
      </div>
      <div className="welcome-container">
        <div className="welcome-message">
          👋WELCOME TO MANAGE WISE!
        </div>
      </div>
      <div className="strategic-text">
        <h2>Empower your business with <span className="strategic-word">Strategic</span> insights</h2>
      </div>
      <div className='p'>
        <h4>Powerful management platform designed to streamline your business operations, boost productivity, and drive success</h4>
      </div>
      <div className="buttons-container">
          <a href="https://templatesunit.lemonsqueezy.com/checkout" className="btn get-started">Get Started</a>
          <a href="https://www.youtube.com/" className="btn watch-demo">Watch Demo</a>
        </div>
        <div className='image'>
    <img src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" alt="Sample Image" className="sample-image" />
</div>

    </header>
    
  );
};

export default Header;
