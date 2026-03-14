import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeLayout from "../../components/EmployeeLayout";
import { apiEndpoints, postData } from "../../api";

function AddEmployeeExpense() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    expense_category: "",
    amount: "",
    date_time: "",
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
      const result = await postData(apiEndpoints.addEmployeeExpense, formData);
      if (result.ok) {
        alert("Expense added successfully");
        navigate("/employee/expenses");
      } else {
        alert(result.data.message || "Failed to add expense");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <EmployeeLayout title="Add Expense">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input
            type="text"
            name="expense_category"
            placeholder="Expense Category"
            value={formData.expense_category}
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="date_time"
            value={formData.date_time}
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
            Save Expense
          </button>
        </form>
      </div>
    </EmployeeLayout>
  );
}

export default AddEmployeeExpense;