import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../components/EmployeeLayout";
import { apiEndpoints, postData } from "../../api";

function AddEmployeeLeave() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: "",
    leave_type: "",
    start_date: "",
    end_date: "",
    is_half_day: "No",
    total_days: "",
    status: "Pending",
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
      const result = await postData(apiEndpoints.addEmployeeLeave, formData);
      if (result.ok) {
        alert("Leave added successfully");
        navigate("/employee/leaves");
      } else {
        alert(result.data.message || "Failed to add leave");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <EmployeeLayout title="Add Leave">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="user"
            placeholder="User Name"
            value={formData.user}
            onChange={handleChange}
          />
          <input
            type="text"
            name="leave_type"
            placeholder="Leave Type"
            value={formData.leave_type}
            onChange={handleChange}
          />
          <input
            type="date"
            name="start_date"
            value={formData.start_date}
            onChange={handleChange}
          />
          <input
            type="date"
            name="end_date"
            value={formData.end_date}
            onChange={handleChange}
          />
          <select
            name="is_half_day"
            value={formData.is_half_day}
            onChange={handleChange}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
          <input
            type="number"
            name="total_days"
            placeholder="Total Days"
            value={formData.total_days}
            onChange={handleChange}
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">Pending</option>
            <option value="Approved">Approved</option>
            <option value="Rejected">Rejected</option>
          </select>

          <button type="submit" className="blue-btn-link plain-btn">
            Save Leave
          </button>
        </form>
      </div>
    </EmployeeLayout>
  );
}

export default AddEmployeeLeave;