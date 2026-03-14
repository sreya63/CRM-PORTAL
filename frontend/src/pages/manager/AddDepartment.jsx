import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, postData } from "../../api";

function AddDepartment() {
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
      const result = await postData(apiEndpoints.departments, formData);
      if (result.ok) {
        alert("Department added successfully");
        navigate("/manager/departments");
      } else {
        alert(result.data.message || "Failed to add department");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <ManagerLayout title="Add Department" mode="manager">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Department Name"
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
            Save Department
          </button>
        </form>
      </div>
    </ManagerLayout>
  );
}

export default AddDepartment;