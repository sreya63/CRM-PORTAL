import React from "react";
import Navbar from "../components/Navbar";

function Features() {
  return (
    <div className="simple-page dark-page">
      <Navbar />
      <div className="page-center white-text">
        <h1>Features</h1>
        <p>
          Employee management, company onboarding, pricing plans, user access,
          website settings, transactions and CRM workflow tools.
        </p>
      </div>
    </div>
  );
}

export default Features;