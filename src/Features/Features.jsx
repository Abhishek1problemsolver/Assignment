import React from 'react';
import './Features.css'; // Import the CSS file

const Features = () => {
  return (
    <div id="features" className="features-container">
      <div className="features-heading">
        <h1 className="text">🔥PREMIER FEATURES</h1>
      </div>
      <div className="product-capabilities">
        <h2>Discover our product's <span className="orange-text">Capabilities</span></h2>
        <p>Don't settle for mediocrity - embrace the future of management with Manage Wise.</p>
      </div>
      <div className="feature-box">
        <div className="text-box">
          <h2><span role="img" aria-label="Star">⭐️</span>Boost productivity and streamline workflow with us.</h2>
          <p>Enjoy our intuitive interface and robust features.</p>
        </div>
        <div className="image-box">
          <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024" alt="Feature Image" />
          <div className="text-overlay">
            <h2>Smart Task Management</h2>
            <p>Say goodbye to chaos with our smart task management system</p>
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div className="flex-item">
          <img src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512" alt="Image 1" />
          <h3>Flexible Scheduling</h3>
          <p>Stay productive with our flexible scheduling system</p>
        </div>
        <div className="flex-item">
          <img src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512" alt="Image 2" />
          <h3>Easy Communication</h3>
          <p>Collaborate seamlessly with your team in real-time</p>
        </div>
        <div className="flex-item">
          <img src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512" alt="Image 3" />
          <h3>Analytics</h3>
          <p>Gain valuable insights with our advanced analytics feature</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
