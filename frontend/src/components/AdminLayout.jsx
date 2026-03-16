import React from "react";
import { Link, useLocation } from "react-router-dom";

function AdminLayout({ title, children }) {
  const location = useLocation();

  const menu = [
    { label: "Dashboard", path: "/superadmin/dashboard" },
    { label: "Companies", path: "/superadmin/companies" },
    { label: "Subscriptions", path: "/superadmin/subscriptions" },
    { label: "Transactions", path: "/superadmin/transactions" },
    { label: "Super Admin", path: "/superadmin/super-admin" }
  ];

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <div className="sidebar-logo">SHNOOR</div>

        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={
              location.pathname === item.path
                ? "sidebar-link active"
                : "sidebar-link"
            }
          >
            {item.label}
          </Link>
        ))}

        <Link
          to="/login"
          target="_blank"
          rel="noopener noreferrer"
          className="sidebar-link" 
        >
          Logout
        </Link>
      </aside>

      <main className="admin-main">
        <div className="admin-topbar">
          <span className="menu-icon">☰</span>
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