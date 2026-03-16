import React from "react";
import ManagerLayout from "../../components/ManagerLayout";

function SelfDashboard() {
  return (
    <ManagerLayout title="Dashboard" mode="self">
      <div className="self-grid">
        <div className="manager-card">
          <h3>Profile Details</h3>
          <div className="profile-lines">
            <p>Phone Number: -</p>
            <p>Email: -</p>
            <p>Address: -</p>
            <p>Joining Date: -</p>
          </div>
        </div>

        <div className="manager-card">
          <h3>Attendance Details</h3>
          <p>Total Attendance: 0</p>
          <p>Present: 0</p>
          <p>Leaves: 0</p>
          <p>Half Day: 0</p>
          <p>Late Attendance: 0</p>
        </div>

        <div className="manager-card">
          <h3>Leave Details</h3>
          <p>Total Leaves: 0</p>
          <p>Approved: 0</p>
          <p>Rejected: 0</p>
          <p>Pending: 0</p>
        </div>
      </div>
    </ManagerLayout>
  );
}

export default SelfDashboard;