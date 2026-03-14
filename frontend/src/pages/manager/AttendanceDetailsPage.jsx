import React, { useEffect, useState } from "react";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, getData } from "../../api";

function AttendanceDetailsPage() {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getData(apiEndpoints.attendanceDetails);
        if (result.ok) setAttendance(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <ManagerLayout title="Attendance Details" mode="manager">
      <div className="stats-grid small-stats">
        <div className="stat-card">
          <h3>0 / 0 Days</h3>
          <p>Present / Working Days</p>
        </div>
        <div className="stat-card">
          <h3>--</h3>
          <p>Total Office Time</p>
        </div>
        <div className="stat-card">
          <h3>--</h3>
          <p>Total Worked Time</p>
        </div>
        <div className="stat-card">
          <h3>--</h3>
          <p>Late</p>
        </div>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Clock In</th>
              <th>Clock Out</th>
              <th>Clocked Time</th>
              <th>Other Details</th>
            </tr>
          </thead>
          <tbody>
            {attendance.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  No data
                </td>
              </tr>
            ) : (
              attendance.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.status}</td>
                  <td>{item.clock_in}</td>
                  <td>{item.clock_out}</td>
                  <td>{item.clocked_time}</td>
                  <td>{item.other_details}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ManagerLayout>
  );
}

export default AttendanceDetailsPage;