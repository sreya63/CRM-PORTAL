import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";

function Transactions() {
  const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

  return (
    <AdminLayout title="Transactions">
      <div className="page-action-bar">
        <Link to="/superadmin/add-transaction" className="yellow-btn">
          + Add New Transaction
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Company</th>
              <th>Transaction ID</th>
              <th>Next Payment Date</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {transactions.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No transactions found
                </td>
              </tr>
            ) : (
              transactions.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.company}</td>
                  <td>{item.transactionId}</td>
                  <td>{item.nextPaymentDate}</td>
                  <td>{item.paymentMethod}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Transactions;