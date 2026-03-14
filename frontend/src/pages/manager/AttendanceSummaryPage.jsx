import React, { useEffect, useState } from "react";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, getData } from "../../api";

function AttendanceSummaryPage() {
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getData(apiEndpoints.attendanceSummary);
        if (result.ok) setSummary(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <ManagerLayout title="Attendance Summary" mode="manager">
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Present</th>
              <th>Holiday</th>
              <th>Leave</th>
            </tr>
          </thead>
          <tbody>
            {summary.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No summary data
                </td>
              </tr>
            ) : (
              summary.map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td>{item.present}</td>
                  <td>{item.holiday}</td>
                  <td>{item.leave}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ManagerLayout>
  );
}

export default AttendanceSummaryPage;