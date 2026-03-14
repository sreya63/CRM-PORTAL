import React from "react";
import Navbar from "../components/Navbar";

function Pricing() {
  return (
    <div>
      <Navbar />
      <div className="pricing-page public-pricing-top">
        <div className="price-card">
          <h4>DEFAULT</h4>
          <h1>Free</h1>
          <p>No credit card required</p>
          <p>Its a default package and cannot be deleted</p>
          <button>Get Started Now</button>
        </div>

        <div className="price-card">
          <div className="popular-text">Most popular</div>
          <h4>MONTHLY</h4>
          <h1>₹499/499</h1>
          <p>Billed Monthly</p>
          <p>Monthly Plan with 50 Users, All Support & Modules Included</p>
          <button>Get Started Now</button>
        </div>

        <div className="price-card">
          <h4>SHNOOR</h4>
          <h1>₹3500/499</h1>
          <p>Billed Monthly</p>
          <p>Shnoor specific</p>
          <button>Get Started Now</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;