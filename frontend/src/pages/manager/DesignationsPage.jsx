import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, getData } from "../../api";

function DesignationsPage() {
  const [designations, setDesignations] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getData(apiEndpoints.designations);
        if (result.ok) setDesignations(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <ManagerLayout title="Designations" mode="manager">
      <div className="page-action-bar">
        <Link to="/manager/add-designation" className="blue-btn-link">
          + Add New Designation
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
            {designations.length === 0 ? (
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  No designations found
                </td>
              </tr>
            ) : (
              designations.map((item) => (
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

export default DesignationsPage;