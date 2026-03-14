import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import { apiEndpoints, postData } from "../../api";

function AddSubscription() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    monthlyPrice: "",
    annualPrice: "",
    maxUsers: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postData(apiEndpoints.subscriptions, {
        name: formData.name,
        monthly_price: formData.monthlyPrice,
        annual_price: formData.annualPrice,
        max_users: formData.maxUsers,
      });

      if (result.ok) {
        alert("Subscription saved successfully");
        navigate("/superadmin/subscriptions");
      } else {
        alert(result.data.message || "Failed to save subscription");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout title="Add Subscription">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Plan Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="monthlyPrice"
            placeholder="Monthly Price"
            value={formData.monthlyPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            name="annualPrice"
            placeholder="Annual Price"
            value={formData.annualPrice}
            onChange={handleChange}
          />
          <input
            type="number"
            name="maxUsers"
            placeholder="Max Users"
            value={formData.maxUsers}
            onChange={handleChange}
          />

          <button type="submit" className="yellow-btn">Save Subscription</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddSubscription;