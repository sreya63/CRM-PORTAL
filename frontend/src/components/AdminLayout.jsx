import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminLayout({ title, children }) {
  const location = useLocation();

  const menu = [
    { label: "Dashboard", path: "/superadmin/dashboard" },
    { label: "Companies", path: "/superadmin/companies" },
    { label: "Subscriptions", path: "/superadmin/subscriptions" },
    { label: "Transactions", path: "/superadmin/transactions" },
    { label: "Offline Requests", path: "/superadmin/offline-requests" },
    { label: "Super Admin", path: "/superadmin/super-admin" },
    { label: "Employees", path: "/superadmin/employees" },
    { label: "Departments", path: "/superadmin/departments" },
    { label: "Designations", path: "/superadmin/designations" },
    { label: "Holidays", path: "/superadmin/holidays" },
    { label: "Attendance Details", path: "/superadmin/attendance-details" },
    { label: "Attendance Summary", path: "/superadmin/attendance-summary" },
    { label: "Profile", path: "/superadmin/profile-settings" },
    { label: "Roles & Permissions", path: "/superadmin/roles-permissions" },
    { label: "Website Settings", path: "/superadmin/website-settings" },
  ];

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <div className="sidebar-logo">SHNOOR</div>

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={
              location.pathname === item.path ? "sidebar-link active" : "sidebar-link"
            }
          >
            {item.label}
          </Link>
        ))}

        <Link to="/login" className="sidebar-link">Logout</Link>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <span className="menu-icon">☰</span>
          <span>en</span>
        </div>

        <div className="admin-content">
          <h1 className="admin-page-title">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;