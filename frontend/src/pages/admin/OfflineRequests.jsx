import React from "react";
import AdminLayout from "../../components/AdminLayout";

function OfflineRequests() {
  const requests = JSON.parse(localStorage.getItem("offlineRequests")) || [];

  return (
    <AdminLayout title="Offline Requests">
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Submitted By</th>
              <th>Subscription Plan</th>
              <th>Plan Type</th>
              <th>Payment Method</th>
              <th>Submitted On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>No data</td>
              </tr>
            ) : (
              requests.map((item) => (
                <tr key={item.id}>
                  <td>{item.company}</td>
                  <td>{item.submittedBy}</td>
                  <td>{item.subscriptionPlan}</td>
                  <td>{item.planType}</td>
                  <td>{item.paymentMethod}</td>
                  <td>{item.submittedOn}</td>
                  <td>{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}

export default OfflineRequests;