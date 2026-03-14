import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, postData } from "../../api";

function AddDesignation() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    total_employee: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData(apiEndpoints.designations, formData);
      if (result.ok) {
        alert("Designation added successfully");
        navigate("/manager/designations");
      } else {
        alert(result.data.message || "Failed to add designation");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <ManagerLayout title="Add Designation" mode="manager">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Designation Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="total_employee"
            placeholder="Total Employee"
            value={formData.total_employee}
            onChange={handleChange}
          />
          <button type="submit" className="blue-btn-link plain-btn">
            Save Designation
          </button>
        </form>
      </div>
    </ManagerLayout>
  );
}

export default AddDesignation;