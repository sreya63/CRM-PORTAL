import React, { useEffect, useState } from "react";
import EmployeeLayout from "../../components/EmployeeLayout";
import { apiEndpoints, getData } from "../../api";

function EmployeeHolidaysPage() {

  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    loadHolidays();
  }, []);

  const loadHolidays = async () => {
    const result = await getData(apiEndpoints.getHolidays);

    if (result.ok) {
      setHolidays(result.data);
    }
  };

  return (
    <EmployeeLayout title="Company Holidays">
      <div className="table-card">

        <table className="admin-table">
          <thead>
            <tr>
              <th>Holiday Name</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {holidays.map((holiday, index) => (
              <tr key={index}>
                <td>{holiday.name}</td>
                <td>{holiday.date}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </EmployeeLayout>
  );
}

export default EmployeeHolidaysPage;