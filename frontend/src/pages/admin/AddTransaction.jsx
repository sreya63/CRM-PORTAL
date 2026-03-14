import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";
import { apiEndpoints, postData } from "../../api";

function AddTransaction() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    company: "",
    transactionId: "",
    nextPaymentDate: "",
    paymentMethod: "offline",
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
      const result = await postData(apiEndpoints.transactions, {
        date: formData.date,
        company: formData.company,
        transaction_id: formData.transactionId,
        next_payment_date: formData.nextPaymentDate,
        payment_method: formData.paymentMethod,
      });

      if (result.ok) {
        alert("Transaction saved successfully");
        navigate("/superadmin/transactions");
      } else {
        alert(result.data.message || "Failed to save transaction");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <AdminLayout title="Add Transaction">
      <div className="form-card">
        <form onSubmit={handleSubmit} className="admin-form">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
          />
          <input
            type="text"
            name="transactionId"
            placeholder="Transaction ID"
            value={formData.transactionId}
            onChange={handleChange}
          />
          <input
            type="date"
            name="nextPaymentDate"
            value={formData.nextPaymentDate}
            onChange={handleChange}
          />
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
          >
            <option value="offline">Offline</option>
            <option value="online">Online</option>
            <option value="card">Card</option>
            <option value="upi">UPI</option>
          </select>

          <button type="submit" className="yellow-btn">
            Save Transaction
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddTransaction;