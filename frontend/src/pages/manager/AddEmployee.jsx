import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, postData } from "../../api";

function AddEmployee() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    report_to: "",
    working_email: "",
    department: "",
    location: "",
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
      const result = await postData(apiEndpoints.employees, formData);
      if (result.ok) {
        alert("Employee added successfully");
        navigate("/manager/employees");
      } else {
        alert(result.data.message || "Failed to add employee");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <ManagerLayout title="Add Employee" mode="manager">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="report_to"
            placeholder="Report To"
            value={formData.report_to}
            onChange={handleChange}
          />
          <input
            type="email"
            name="working_email"
            placeholder="Working Email"
            value={formData.working_email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />

          <button type="submit" className="blue-btn-link plain-btn">
            Save Employee
          </button>
        </form>
      </div>
    </ManagerLayout>
  );
}

export default AddEmployee;