import React from "react";
import ManagerLayout from "../../components/ManagerLayout";

function ManagerDashboard() {
  return (
    <ManagerLayout title="Dashboard" mode="manager">
      <div className="manager-top-grid">
        <div className="manager-card large">
          <h3>Attendances</h3>
          <div className="attendance-actions">
            <button className="blue-btn">Clock In</button>
            <button className="blue-btn">Clock Out</button>
          </div>
        </div>

        <div className="manager-stat-card">
          <h2>115</h2>
          <p>Total Employees</p>
        </div>
        <div className="manager-stat-card">
          <h2>115</h2>
          <p>Total Active Employees</p>
        </div>
        <div className="manager-stat-card">
          <h2>0</h2>
          <p>Total Inactive Employees</p>
        </div>
        <div className="manager-stat-card">
          <h2>115</h2>
          <p>Employee Under You</p>
        </div>
      </div>

      <div className="manager-bottom-grid">
        <div className="manager-card">
          <h3>Pending Approvals</h3>
          <div className="empty-box">No data</div>
        </div>
        <div className="manager-card">
          <h3>Attendances</h3>
          <div className="empty-box">Attendance chart area</div>
        </div>
        <div className="manager-card">
          <h3>Clock-In/Out</h3>
          <div className="empty-box">No attendance marked</div>
        </div>
      </div>
    </ManagerLayout>
  );
}

export default ManagerDashboard;