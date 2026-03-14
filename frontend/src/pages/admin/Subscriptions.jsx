import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";

function Subscriptions() {
  const subscriptions = JSON.parse(localStorage.getItem("subscriptions")) || [];

  return (
    <AdminLayout title="Subscription Plans">
      <div className="page-action-bar">
        <Link to="/superadmin/add-subscription" className="yellow-btn">
          + Add New Subscription Plan
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Monthly Price</th>
              <th>Annual Price</th>
              <th>Max Users</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>₹{item.monthlyPrice}</td>
                <td>₹{item.annualPrice}</td>
                <td>{item.maxUsers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Subscriptions;