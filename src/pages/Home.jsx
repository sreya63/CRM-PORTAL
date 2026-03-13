import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to SHNOOR HRM</h1>
        </div>
      </section>
    </div>
  );
}

export default Home;