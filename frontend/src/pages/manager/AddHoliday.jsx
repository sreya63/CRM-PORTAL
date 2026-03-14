import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, postData } from "../../api";

function AddHoliday() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
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
      const result = await postData(apiEndpoints.holidays, formData);
      if (result.ok) {
        alert("Holiday added successfully");
        navigate("/manager/holidays");
      } else {
        alert(result.data.message || "Failed to add holiday");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <ManagerLayout title="Add Holiday" mode="manager">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Holiday Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit" className="blue-btn-link plain-btn">
            Save Holiday
          </button>
        </form>
      </div>
    </ManagerLayout>
  );
}

export default AddHoliday;