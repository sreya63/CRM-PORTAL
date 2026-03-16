import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ManagerLayout({ title, children, mode = "manager" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const managerMenu = [
    { label: "Dashboard", path: "/manager/dashboard" },
    { label: "Employees", path: "/manager/employees" },
    { label: "Departments", path: "/manager/departments" },
    { label: "Designations", path: "/manager/designations" },
    { label: "Holidays", path: "/manager/holidays" },
    { label: "Attendance Details", path: "/manager/attendance-details" },
    { label: "Attendance Summary", path: "/manager/attendance-summary" },
    { label: "Settings", path: "/manager/settings-profile" }
  ];

  const selfMenu = [
    { label: "Dashboard", path: "/manager/self-dashboard" },
    { label: "Assets", path: "/employee/assets" },
    { label: "Holidays", path: "/employee/holidays" },
    { label: "Appreciations", path: "/employee/appreciations" },
    { label: "Leaves", path: "/employee/leaves" },
    { label: "Attendance", path: "/employee/attendance" },
    { label: "Profile", path: "/employee/profile" }
  ];

  const selfPaths = [
    "/manager/self-dashboard",
    "/employee/assets",
    "/employee/holidays",
    "/employee/appreciations",
    "/employee/leaves",
    "/employee/attendance",
    "/employee/profile"
  ];

  const isSelfPage = selfPaths.includes(location.pathname);
  const menu = isSelfPage || mode === "self" ? selfMenu : managerMenu;

  return (
    <div className="portal-wrapper">
      <aside className="portal-sidebar">
        <div className="portal-logo">SHNOOR</div>

        <div className="portal-tabs">
          <Link
            to="/manager/self-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className={isSelfPage ? "portal-tab active-tab" : "portal-tab"}
          >
            Self
          </Link>

          <Link
            to="/manager/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className={!isSelfPage ? "portal-tab active-tab" : "portal-tab"}
          >
            Manager
          </Link>
        </div>

        <div className="portal-menu">
          {menu.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={location.pathname === item.path ? "portal-link active" : "portal-link"}
            >
              {item.label}
            </Link>
          ))}

          <button className="portal-logout" onClick={() => navigate("/")}>
            Logout
          </button>
        </div>
      </aside>

      <main className="portal-main">
        <div className="portal-topbar">
          <span className="portal-menu-icon">☰</span>
        </div>

        <div className="portal-content">
          <h1 className="portal-title">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}

export default ManagerLayout;