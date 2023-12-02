import React from 'react';
import './price.css'; // Import your CSS file for styling

const Price = () => {
  return (
    <div id="pricing" className="pricingSection">
      <h2 className="pricingHeading">💲PRICING</h2>
      <div className="pricingContent">
        <h2 className="pricingHeading">Select your ideal Pricing plan</h2>
        <p className="pricingSubheading">
          At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.
        </p>
        
        {/* Pricing plans */}
        <div className="pricing-plans">
          <div className="pricing-plan">
            <h2>FREE</h2>
            <h3>$0 <span>/month</span></h3>
            <ul>
              <li>Access to all basic features</li>
              <li>Reporting and analytics</li>
              <li>Up to 5 individual users</li>
              <li>Chat and email support</li>
            </ul>
            <a href="https://templatesunit.lemonsqueezy.com/checkout" className="get-started-button">Get Started</a>
          </div>
          
          <div className="pricing-plan">
            <h2>standard</h2>
            <h3>$20 <span>/month</span></h3>
            <ul>
              <li>Access to all basic features</li>
              <li>Reporting and analytics</li>
              <li>Up to 5 individual users</li>
              <li>Chat and email support</li>
            </ul>
            <a href="https://templatesunit.lemonsqueezy.com/checkout" className="get-started-button">Get Started</a>
          </div>
          
          <div className="pricing-plan">
            <h2>advanced</h2>
            <h3>$50 <span>/month</span></h3>
            <ul>
              <li>Access to all basic features</li>
              <li>Reporting and analytics</li>
              <li>Up to 5 individual users</li>
              <li>Chat and email support</li>
            </ul>
            <a href="https://templatesunit.lemonsqueezy.com/checkout" className="get-started-button">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
