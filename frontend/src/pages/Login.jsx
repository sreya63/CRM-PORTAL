import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email_or_phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email_or_phone === "superadmin" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("loggedInSuperAdmin", "true");
      navigate("/superadmin/dashboard");
      return;
    }


    if (
      formData.email_or_phone === "admin@gmail.com" &&
      formData.password === "admin123"
    ) {
      localStorage.setItem("loggedInAdmin", "true");
      navigate("/manager/dashboard");
      return;
    }

    if (
      formData.email_or_phone === "employee@gmail.com" &&
      formData.password === "emp123"
    ) {
      localStorage.setItem("loggedInEmployee", "true");
      navigate("/employee/dashboard");
      return;
    }

    alert("Invalid credentials");
  };

  return (
    <div className="login-page-public">
      <div className="login-box-public">
        <div className="login-logo-public">SHNOOR</div>

        <form className="login-form-public" onSubmit={handleSubmit}>
          <label>Email or Phone</label>
          <input
            type="text"
            name="email_or_phone"
            placeholder="Please Enter Email or Phone"
            value={formData.email_or_phone}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Please Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;