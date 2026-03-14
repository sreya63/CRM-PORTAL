import React from "react";
import AdminLayout from "../../components/AdminLayout";

function Dashboard() {
  const companies = [];

  const activeCompanies = companies.filter((c) => c.status === "Active").length;
  const inactiveCompanies = companies.filter((c) => c.status !== "Active").length;

  return (
    <AdminLayout title="Dashboard">
      <div className="stats-grid">
        <div className="stat-card">
          <h3>{companies.length}</h3>
          <p>Total Companies</p>
        </div>
        <div className="stat-card">
          <h3>{activeCompanies}</h3>
          <p>Active Companies</p>
        </div>
        <div className="stat-card">
          <h3>{inactiveCompanies}</h3>
          <p>Inactive Companies</p>
        </div>
        <div className="stat-card">
          <h3>0</h3>
          <p>License Expired</p>
        </div>
      </div>

      <div className="table-card">
        <h2>Recently Registered Companies</h2>
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

export default Dashboard;