import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeLayout from "../../components/EmployeeLayout";
import { apiEndpoints, getData } from "../../api";

function EmployeeLeavesPage() {
  const [leaves, setLeaves] = useState([]);
  const [remainingLeaves, setRemainingLeaves] = useState({
    total: 0,
    used: 0,
    remaining: 0,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const leavesResult = await getData(apiEndpoints.employeeLeaves);
        if (leavesResult.ok) setLeaves(leavesResult.data);

        const remainResult = await getData(apiEndpoints.employeeRemainingLeaves);
        if (remainResult.ok) setRemainingLeaves(remainResult.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadData();
  }, []);

  return (
    <EmployeeLayout title="Leaves">
      <div className="leave-summary-box">
        <div className="stat-card">
          <h3>{remainingLeaves.total}</h3>
          <p>Total Leaves</p>
        </div>
        <div className="stat-card">
          <h3>{remainingLeaves.used}</h3>
          <p>Used Leaves</p>
        </div>
        <div className="stat-card">
          <h3>{remainingLeaves.remaining}</h3>
          <p>Remaining Leaves</p>
        </div>
      </div>

      <div className="page-action-bar">
        <Link to="/employee/add-leave" className="blue-btn-link">
          + Add New Leave
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Is Half Day</th>
              <th>Total Days</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {leaves.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No leaves found
                </td>
              </tr>
            ) : (
              leaves.map((item) => (
                <tr key={item.id}>
                  <td>{item.user}</td>
                  <td>{item.leave_type}</td>
                  <td>{item.start_date}</td>
                  <td>{item.end_date}</td>
                  <td>{item.is_half_day}</td>
                  <td>{item.total_days}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </EmployeeLayout>
  );
}

export default EmployeeLeavesPage;