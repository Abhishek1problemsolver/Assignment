import React from 'react';
import './More.css'; // Import the CSS file

const More = () => {
  return (
    <div className="more-container">
      <div className="rounded-bar">
        <h2>🤩 AND MORE...</h2>
      </div>
      <div className="features-heading">
        <h2>Explore an array of features that elevate your <span className="orange-text">Productivity</span> to new heights</h2>
        <p>Discover the tools that will revolutionize the way you manage and optimize your operations</p>
      </div>
      <div className="flex-containers">
        {/* First Flexbox */}
        <div className="flex-item">
          <img src="https://icons8.com/icon/zcPnQyofZFF9/cross-platform" alt="Icon 1" />
          <h3>Cross-Platform Compatibility</h3>
          <p>Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket.</p>
        </div>
        
        {/* Second Flexbox */}
        <div className="flex-item">
          <img src="https://icons8.com/icon/OKYn6s2qcOyx/notification" alt="Icon 2" />
          <h3>Stay Informed with Essential Notifications</h3>
          <p>Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device.</p>
        </div>
        
        {/* Third Flexbox */}
        <div className="flex-item">
          <img src="https://icons8.com/icon/31481/data-protection" alt="Icon 3" />
          <h3>Secure Data Encryption at all times</h3>
          <p>Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times.</p>
        </div>
      </div>
      <div className='icons'>
      <div id="svg-templates" >
    <div id="container_svg-819241569_136">
      <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg" id="svg-819241569_136">
        <rect y="10" width="80" height="80" rx="10" fill="#DACEC2"></rect>
        <circle cx="50" cy="50" r="25" fill="#6D6875"></circle>
      </svg>
    </div>
    
  </div>

      </div>
    <img src='https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024'></img>
    </div>
  );
};

export default More;
