import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ManagerLayout from "../../components/ManagerLayout";
import { apiEndpoints, getData } from "../../api";

function HolidaysPage() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await getData(apiEndpoints.holidays);
        if (result.ok) setHolidays(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    loadData();
  }, []);

  return (
    <ManagerLayout title="Holidays" mode="manager">
      <div className="page-action-bar">
        <Link to="/manager/add-holiday" className="blue-btn-link">
          + Add New Holiday
        </Link>
      </div>

      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {holidays.length === 0 ? (
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  No holidays found
                </td>
              </tr>
            ) : (
              holidays.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </ManagerLayout>
  );
}

export default HolidaysPage;