import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import { apiEndpoints, postData } from "../../api";

function AddCompany() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    verified: "No",
    totalUsers: "",
    subscriptionPlan: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postData(apiEndpoints.companies, {
        company_name: formData.companyName,
        email: formData.email,
        verified: formData.verified,
        total_users: formData.totalUsers,
        subscription_plan: formData.subscriptionPlan,
        status: formData.status,
      });

      if (result.ok) {
        alert("Company saved successfully");
        navigate("/superadmin/companies");
      } else {
        alert(result.data.message || "Failed to save company");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout title="Add Company">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Company Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="totalUsers"
            placeholder="Total Users"
            value={formData.totalUsers}
            onChange={handleChange}
          />
          <input
            type="text"
            name="subscriptionPlan"
            placeholder="Subscription Plan"
            value={formData.subscriptionPlan}
            onChange={handleChange}
          />
          <select name="verified" value={formData.verified} onChange={handleChange}>
            <option value="No">Not Verified</option>
            <option value="Yes">Verified</option>
          </select>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <button type="submit" className="yellow-btn">Save Company</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddCompany;