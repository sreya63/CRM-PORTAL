import React from "react";

function Login() {
  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">SHNOOR</div>

        <form className="login-form">
          <label>Email or Phone</label>
          <input type="text" placeholder="Please Enter Email or Phone" />

          <label>Password</label>
          <div className="password-wrap">
            <input type="password" placeholder="Please Enter Password" />
            <span className="eye-icon">👁</span>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;