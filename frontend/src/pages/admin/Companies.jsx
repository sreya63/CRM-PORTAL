import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";


function Companies() {
  const companies = JSON.parse(localStorage.getItem("companies")) || [];

  return (
    <AdminLayout title="Companies">
      <div className="page-action-bar">
        <Link to="/superadmin/add-company" className="yellow-btn">
          + Add New Company
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Company Email</th>
              <th>Details</th>
              <th>Subscription Plan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((item) => (
              <tr key={item.id}>
                <td>{item.companyName}</td>
                <td>{item.email}</td>
                <td>
                  Verified: {item.verified}
                  <br />
                  Register Date: {item.registerDate}
                  <br />
                  Total Users: {item.totalUsers}
                </td>
                <td>{item.subscriptionPlan}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default Companies;