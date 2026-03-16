import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EmployeeLayout({ title, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmployee");
    navigate("/");
  };

  return (
    <div className="portal-wrapper">
      <aside className="portal-sidebar">
        <div className="portal-logo">SHNOOR</div>

        <div className="portal-menu">
          <Link
            to="/employee/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className={
              location.pathname === "/employee/dashboard"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Employee Dashboard
          </Link>

          <Link
            to="/employee/holidays"
            rel="noopener noreferrer"
            className={
              location.pathname === "/employee/holidays"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Holidays
          </Link>

          <Link
            to="/employee/appreciations"
            rel="noopener noreferrer"
            className={
              location.pathname === "/employee/appreciations"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Appreciations
          </Link>

          <Link
            to="/employee/leaves"
            rel="noopener noreferrer"
            className={
              location.pathname === "/employee/leaves"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Leaves
          </Link>

          <Link
            to="/employee/attendance"
            rel="noopener noreferrer"
            className={
              location.pathname === "/employee/attendance"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Attendance
          </Link>

          <Link
            to="/employee/profile"
            rel="noopener noreferrer"
            className={
              location.pathname === "/employee/profile"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Profile
          </Link>

          <button className="portal-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="portal-main">
        <div className="portal-topbar">
          <span className="portal-menu-icon">☰</span>
          <div className="portal-top-right">
            <span>en</span>
          </div>
        </div>

        <div className="portal-content">
          <h1 className="portal-title">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}

export default EmployeeLayout;