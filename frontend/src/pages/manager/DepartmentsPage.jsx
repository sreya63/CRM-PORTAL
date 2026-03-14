import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, getData } from "../../api";

function DepartmentsPage() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getData(apiEndpoints.departments);
        if (result.ok) setDepartments(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <ManagerLayout title="Departments" mode="manager">
      <div className="page-action-bar">
        <Link to="/manager/add-department" className="blue-btn-link">
          + Add New Department
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Total Employee</th>
            </tr>
          </thead>
          <tbody>
            {departments.length === 0 ? (
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  No departments found
                </td>
              </tr>
            ) : (
              departments.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.total_employee}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ManagerLayout>
  );
}

export default DepartmentsPage;