import React from "react";
import Navbar from "../components/Navbar";
import heroBg from "../assets/hero-bg.avif";

function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <section
        className="hero-section"
        style={{
       backgroundImage: `url(${heroBg})`,
       backgroundSize: "cover",
       backgroundPosition: "center",
       backgroundRepeat: "no-repeat",
      }}
      >
        <div className="hero-overlay">
          <h1>Welcome to SHNOOR HRM</h1>
          <p>
            Manage companies, subscriptions, transactions, super admin controls
            and website settings in one portal.
          </p>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">SHNOOR</div>
            <p className="footer-text">
              Don't hesitate. Our experts will show you how our application can
              streamline the way your team works.
            </p>
            <p className="footer-copy">
              Copyright 2021 @ShnoorInternationalLLC, All rights reserved
            </p>
          </div>

          <div>
            <h3>Links</h3>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="/features">Features</a>
              <a href="/pricing">Pricing</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div>
            <h3>Contact Us</h3>
            <p>info@shnoor.com</p>
            <p>9429694298</p>
          </div>
        </div>

        <div className="footer-socials">
          <span>Twitter</span>
          <span>Facebook</span>
          <span>Instagram</span>
          <span>LinkedIn</span>
          <span>YouTube</span>
        </div>
      </footer>
    </div>
  );
}

export default Home;