import React from 'react';
import './footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="Company Logo" />
        </div>
        <nav className="footer-nav">
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
          </ul>
        </nav>
        <div className="social-icons">
          <a href="https://www.instagram.com"><img src="https://cdn4.iconfinder.com/data/icons/social-media-black-white-2/600/Instagram_glyph_svg-512.png" alt="Instagram" /></a>
          <a href="https://www.linkedin.com"><img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG23.png" alt="LinkedIn" /></a>
          <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fhome"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png" alt="png" /></a>
        </div>
      </div>
      <div className="footer-info">
        <p>© 2022 ManageWise, Inc.</p>
      </div>
    </footer>
  );
};

export default Footer;
