import React, { useEffect, useState } from "react";
import EmployeeLayout from "../../components/EmployeeLayout";
import { apiEndpoints, getData } from "../../api";

function EmployeeProfilePage() {
  const [profile, setProfile] = useState({
    phone: "",
    email: "",
    address: "",
    joining_date: "",
  });

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const result = await getData(apiEndpoints.profileSettings);
        if (result.ok) {
          setProfile(result.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadProfile();
  }, []);

  return (
    <EmployeeLayout title="Profile">
      <div className="manager-card">
        <h3>Profile Details</h3>

        <div className="profile-lines">
          <p><b>Phone Number:</b> {profile.phone || "-"}</p>
          <p><b>Email:</b> {profile.email || "-"}</p>
          <p><b>Address:</b> {profile.address || "-"}</p>
          <p><b>Joining Date:</b> {profile.joining_date || "-"}</p>
        </div>
      </div>
    </EmployeeLayout>
  );
}

export default EmployeeProfilePage;