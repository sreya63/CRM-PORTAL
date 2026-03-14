import React, { useEffect, useState } from "react";
import { apiEndpoints, getData, postData } from "../../api";
import ManagerLayout from "../../components/ManagerLayout";

function SettingsProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [roleData, setRoleData] = useState({
    role_name: "",
    description: "",
  });

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const loadRoles = async () => {
      try {
        const result = await getData(apiEndpoints.rolesPermissions);
        if (result.ok) setRoles(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadRoles();
  }, []);

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleChange = (e) => {
    setRoleData({
      ...roleData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postData(apiEndpoints.profileSettings, profileData);
      if (result.ok) {
        alert("Profile updated successfully");
      } else {
        alert(result.data.message || "Failed to update profile");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  const handleRoleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await postData(apiEndpoints.rolesPermissions, roleData);
      if (result.ok) {
        alert("Role added successfully");
        setRoleData({
          role_name: "",
          description: "",
        });

        const refreshed = await getData(apiEndpoints.rolesPermissions);
        if (refreshed.ok) setRoles(refreshed.data);
      } else {
        alert(result.data.message || "Failed to add role");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <ManagerLayout title="Profile" mode="manager">
      <div className="settings-grid">
        <div className="settings-side-menu">
          <p
            className={activeTab === "profile" ? "active-menu-item" : ""}
            onClick={() => setActiveTab("profile")}
            style={{ cursor: "pointer" }}
          >
            Profile
          </p>

          <p
            className={activeTab === "roles" ? "active-menu-item" : ""}
            onClick={() => setActiveTab("roles")}
            style={{ cursor: "pointer" }}
          >
            Roles & Permissions
          </p>

          <p>Employee Work</p>
          <p>Currencies</p>
          <p>Locations</p>
          <p>Pdf Fonts</p>
          <p>HRM Settings</p>
          <p>Payroll Settings</p>
          <p>Email Settings</p>
        </div>

        <div className="settings-form-card">
          {activeTab === "profile" && (
            <form onSubmit={handleProfileSubmit} className="admin-form">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={profileData.name}
                onChange={handleProfileChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={profileData.email}
                onChange={handleProfileChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={profileData.password}
                onChange={handleProfileChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={profileData.phone}
                onChange={handleProfileChange}
              />
              <textarea
                name="address"
                placeholder="Address"
                rows="4"
                value={profileData.address}
                onChange={handleProfileChange}
              />
              <button type="submit" className="blue-btn-link plain-btn">
                Update
              </button>
            </form>
          )}

          {activeTab === "roles" && (
            <div>
              <form onSubmit={handleRoleSubmit} className="admin-form" style={{ marginBottom: "24px" }}>
                <input
                  type="text"
                  name="role_name"
                  placeholder="Role Name"
                  value={roleData.role_name}
                  onChange={handleRoleChange}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  rows="4"
                  value={roleData.description}
                  onChange={handleRoleChange}
                />
                <button type="submit" className="blue-btn-link plain-btn">
                  Add Role
                </button>
              </form>

              <div className="table-card">
                <table>
                  <thead>
                    <tr>
                      <th>Role Name</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {roles.length === 0 ? (
                      <tr>
                        <td colSpan="2" style={{ textAlign: "center" }}>
                          No roles found
                        </td>
                      </tr>
                    ) : (
                      roles.map((item) => (
                        <tr key={item.id}>
                          <td>{item.role_name}</td>
                          <td>{item.description}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </ManagerLayout>
  );
}

export default SettingsProfilePage;