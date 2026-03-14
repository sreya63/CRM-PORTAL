import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import { apiEndpoints, postData } from "../../api";

function AddSuperAdmin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    status: "Enabled",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postData(apiEndpoints.superAdmins, formData);

      if (result.ok) {
        alert("Super admin saved successfully");
        navigate("/superadmin/super-admin");
      } else {
        alert(result.data.message || "Failed to save super admin");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout title="Add Super Admin">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Admin Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
          />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>

          <button type="submit" className="yellow-btn">Save Super Admin</button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddSuperAdmin;