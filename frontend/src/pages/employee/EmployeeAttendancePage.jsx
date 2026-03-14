import React from "react";
import EmployeeLayout from "../../components/EmployeeLayout";

function EmployeeAttendancePage() {
  return (
    <EmployeeLayout title="Attendance">
      <div className="table-card">
        <p>No attendance data available.</p>
      </div>
    </EmployeeLayout>
  );
}

export default EmployeeAttendancePage;