import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, getData } from "../../api";

function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const result = await getData(apiEndpoints.employees);
        if (result.ok) setEmployees(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadEmployees();
  }, []);

  return (
    <ManagerLayout title="Users" mode="manager">
      <div className="page-action-bar">
        <Link to="/manager/add-employee" className="blue-btn-link">
          + Add New Employee
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Report To</th>
              <th>Working Email</th>
              <th>Department</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No employees found
                </td>
              </tr>
            ) : (
              employees.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.report_to}</td>
                  <td>{item.working_email}</td>
                  <td>{item.department}</td>
                  <td>{item.location}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ManagerLayout>
  );
}

export default EmployeesPage;