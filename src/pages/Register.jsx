import React from "react";

function Register() {
  return (
    <div className="register-page">
      <div className="register-box">
        <h1>Join SHNOOR HRM For Free</h1>

        <form className="register-form">
          <input type="text" placeholder="Company Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>I agree to the Terms & Conditions of Hrmifly</span>
          </label>

          <button type="submit">SIGN UP FOR FREE</button>
        </form>
      </div>
    </div>
  );
}

export default Register;