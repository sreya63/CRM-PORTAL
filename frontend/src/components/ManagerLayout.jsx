import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function ManagerLayout({ title, children, mode = "manager" }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInAdmin");
    navigate("/login");
  };

  return (
    <div className="portal-wrapper">
      <aside className="portal-sidebar">
        <div className="portal-logo">SHNOOR</div>

        <div className="portal-tabs">
          <Link
            to="/manager/self-dashboard"
            className={mode === "self" ? "portal-tab active-tab" : "portal-tab"}
          >
            Self
          </Link>
          <Link
            to="/manager/dashboard"
            className={mode === "manager" ? "portal-tab active-tab" : "portal-tab"}
          >
            Manager
          </Link>
        </div>

        <div className="portal-menu">
          <Link
            to={mode === "self" ? "/manager/self-dashboard" : "/manager/dashboard"}
            className={location.pathname.includes("dashboard") ? "portal-link active" : "portal-link"}
          >
            Dashboard
          </Link>

          <div className="portal-group">
            <div className="portal-group-title">Employees</div>
            <Link
              to="/manager/employees"
              className={location.pathname === "/manager/employees" ? "portal-sublink active-sub" : "portal-sublink"}
            >
              Employees
            </Link>
            <Link
              to="/manager/departments"
              className={location.pathname === "/manager/departments" ? "portal-sublink active-sub" : "portal-sublink"}
            >
              Departments
            </Link>
            <Link
              to="/manager/designations"
              className={location.pathname === "/manager/designations" ? "portal-sublink active-sub" : "portal-sublink"}
            >
              Designations
            </Link>
          </div>

          <Link
            to="/manager/holidays"
            className={location.pathname === "/manager/holidays" ? "portal-link active" : "portal-link"}
          >
            Holidays
          </Link>

          <div className="portal-group-title">Attendance</div>
          <Link
            to="/manager/attendance-details"
            className={
            location.pathname === "/manager/attendance-details"
            ? "portal-sublink active-sub"
            : "portal-sublink"
          }
        >
  Attendance Details
</Link>
<Link
  to="/manager/attendance-summary"
  className={
    location.pathname === "/manager/attendance-summary"
      ? "portal-sublink active-sub"
      : "portal-sublink"
  }
>
  Attendance Summary
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

        <div className="portal-group-title">Settings</div>
        <Link
          to="/manager/settings-profile"
          className={
          location.pathname === "/manager/settings-profile"
          ? "portal-sublink active-sub"
          : "portal-sublink"
         }
         >
           Profile
         </Link>

        <div className="portal-content">
          <h1 className="portal-title">{title}</h1>
          {children}
        </div>
      </main>
    </div>
  );
}

export default ManagerLayout;