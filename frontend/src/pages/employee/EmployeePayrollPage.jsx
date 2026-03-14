import React from "react";
import EmployeeLayout from "../../components/EmployeeLayout";

function EmployeePayrollPage() {
  return (
    <EmployeeLayout title="Payroll">
      <div className="table-card">
        <p>No payroll data available.</p>
      </div>
    </EmployeeLayout>
  );
}

export default EmployeePayrollPage;