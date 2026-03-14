import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function EmployeeLayout({ title, children }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInEmployee");
    navigate("/login");
  };

  return (
    <div className="portal-wrapper">
      <aside className="portal-sidebar">
        <div className="portal-logo">SHNOOR</div>

        <div className="portal-tabs">
          <span className="portal-tab active-tab">Self</span>
          <span className="portal-tab">Manager</span>
        </div>

        <div className="portal-menu">
          <Link
            to="/employee/dashboard"
            className={
              location.pathname === "/employee/dashboard"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Dashboard
          </Link>

          <Link
            to="/employee/assets"
            className={
              location.pathname === "/employee/assets"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Assets
          </Link>

          <Link
            to="/employee/holidays"
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
            className={
              location.pathname === "/employee/attendance"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Attendance
          </Link>

          <Link
            to="/employee/offboardings"
            className={
              location.pathname === "/employee/offboardings"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Offboardings
          </Link>

          <Link
            to="/employee/letter-heads"
            className={
              location.pathname === "/employee/letter-heads"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Letter Heads
          </Link>

          <Link
            to="/employee/expenses"
            className={
              location.pathname === "/employee/expenses"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Expenses
          </Link>

          <Link
            to="/employee/payroll"
            className={
              location.pathname === "/employee/payroll"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Payroll
          </Link>

          <Link
            to="/employee/company-policies"
            className={
              location.pathname === "/employee/company-policies"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Company Policies
          </Link>

          <Link
            to="/employee/custom-data-fields"
            className={
              location.pathname === "/employee/custom-data-fields"
                ? "portal-link active"
                : "portal-link"
            }
          >
            Custom Data Fields
          </Link>

          <Link
            to="/employee/profile"
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