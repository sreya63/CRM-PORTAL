import React from "react";
import EmployeeLayout from "../../components/EmployeeLayout";

function EmployeeProfilePage() {
  return (
    <EmployeeLayout title="Profile">
      <div className="table-card">
        <p>No profile data available.</p>
      </div>
    </EmployeeLayout>
  );
}

export default EmployeeProfilePage;