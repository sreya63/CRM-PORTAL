import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/AdminLayout";

function SuperAdmin() {
  const admins = JSON.parse(localStorage.getItem("superAdmins")) || [];

  return (
    <AdminLayout title="Super Admin">
      <div className="page-action-bar">
        <Link to="/superadmin/add-super-admin" className="yellow-btn">
          + Add New Super Admin
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default SuperAdmin;