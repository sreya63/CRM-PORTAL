import React, { useState, useEffect } from "react";
import AdminLayout from "../../components/AdminLayout";
import { apiEndpoints, postData } from "../../api";

function WebsiteSettings() {
  const [settings, setSettings] = useState({
    appName: "Shnoor international LLC SAAS",
    loginText: "Login",
    registerText: "Register",
    showLoginButton: true,
    showRegisterButton: true,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("websiteSettings"));
    if (saved) setSettings(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postData(apiEndpoints.websiteSettings, settings);

      if (result.ok) {
        localStorage.setItem("websiteSettings", JSON.stringify(settings));
        alert("Website settings saved successfully");
      } else {
        alert(result.data.message || "Failed to save settings");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout title="Header Settings">
      <form onSubmit={handleSubmit} className="settings-grid">
        <div className="settings-side-menu">
          <p>Header Settings</p>
          <p>Clients Settings</p>
          <p>Testimonials Settings</p>
          <p>Features Settings</p>
          <p>Contact Settings</p>
          <p>Price Settings</p>
          <p>FAQ Settings</p>
          <p>Footer Settings</p>
          <p>Register Settings</p>
          <p>SEO Settings</p>
        </div>

        <div className="settings-form-card">
          <label>App Name</label>
          <input
            type="text"
            name="appName"
            value={settings.appName}
            onChange={handleChange}
          />

          <label>Show Login Button</label>
          <input
            type="checkbox"
            name="showLoginButton"
            checked={settings.showLoginButton}
            onChange={handleChange}
          />

          <label>Login Text</label>
          <input
            type="text"
            name="loginText"
            value={settings.loginText}
            onChange={handleChange}
          />

          <label>Show Register Button</label>
          <input
            type="checkbox"
            name="showRegisterButton"
            checked={settings.showRegisterButton}
            onChange={handleChange}
          />

          <label>Register Text</label>
          <input
            type="text"
            name="registerText"
            value={settings.registerText}
            onChange={handleChange}
          />

          <button type="submit" className="yellow-btn">Save Settings</button>
        </div>
      </form>
    </AdminLayout>
  );
}

export default WebsiteSettings;