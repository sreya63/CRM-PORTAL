import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { apiEndpoints, postData } from "../api";

function Register() {
  const [formData, setFormData] = useState({
    company_name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      company_name: formData.company_name,
      email: formData.email,
      password: formData.password,
    };

    try {
      const result = await postData(apiEndpoints.register, payload);

      if (result.ok) {
        alert("Company registered successfully");
        setFormData({
          company_name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      } else {
        alert(result.data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="register-page-public">
        <div className="register-box-public">
          <h1>Join SHNOOR HRM For Free</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Malesuada tellus vestibulum, commodo pulvinar.
          </p>

          <form className="register-form-public" onSubmit={handleSubmit}>
            <input
              type="text"
              name="company_name"
              placeholder="Company Name"
              value={formData.company_name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
            />

            <button type="submit">SIGN UP FOR FREE</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;