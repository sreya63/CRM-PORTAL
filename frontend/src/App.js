import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Dashboard from "./pages/admin/Dashboard";
import Companies from "./pages/admin/Companies";
import AddCompany from "./pages/admin/AddCompany";
import Subscriptions from "./pages/admin/Subscriptions";
import AddSubscription from "./pages/admin/AddSubscription";
import Transactions from "./pages/admin/Transactions";
import AddTransaction from "./pages/admin/AddTransaction";
import SuperAdmin from "./pages/admin/SuperAdmin";
import AddSuperAdmin from "./pages/admin/AddSuperAdmin";

import ManagerDashboard from "./pages/manager/ManagerDashboard";
import EmployeesPage from "./pages/manager/EmployeesPage";
import AddEmployee from "./pages/manager/AddEmployee";
import DepartmentsPage from "./pages/manager/DepartmentsPage";
import AddDepartment from "./pages/manager/AddDepartment";
import DesignationsPage from "./pages/manager/DesignationsPage";
import AddDesignation from "./pages/manager/AddDesignation";
import HolidaysPage from "./pages/manager/HolidaysPage";
import AddHoliday from "./pages/manager/AddHoliday";
import AttendanceDetailsPage from "./pages/manager/AttendanceDetailsPage";
import AttendanceSummaryPage from "./pages/manager/AttendanceSummaryPage";
import SettingsProfilePage from "./pages/manager/SettingsProfilePage";
import SelfDashboard from "./pages/manager/SelfDashboard";

import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
import EmployeeLeavesPage from "./pages/employee/EmployeeLeavesPage";
import AddEmployeeLeave from "./pages/employee/AddEmployeeLeave";
import EmployeeHolidaysPage from "./pages/employee/EmployeeHolidaysPage";

import EmployeeAppreciationsPage from "./pages/employee/EmployeeAppreciationsPage";
import EmployeeAttendancePage from "./pages/employee/EmployeeAttendancePage";
import EmployeeProfilePage from "./pages/employee/EmployeeProfilePage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/superadmin/dashboard" element={<Dashboard />} />
        <Route path="/superadmin/companies" element={<Companies />} />
        <Route path="/superadmin/add-company" element={<AddCompany />} />
        <Route path="/superadmin/subscriptions" element={<Subscriptions />} />
        <Route path="/superadmin/add-subscription" element={<AddSubscription />} />
        <Route path="/superadmin/transactions" element={<Transactions />} />
        <Route path="/superadmin/add-transaction" element={<AddTransaction />} />
        <Route path="/superadmin/super-admin" element={<SuperAdmin />} />
        <Route path="/superadmin/add-super-admin" element={<AddSuperAdmin />} />

        <Route path="/manager/dashboard" element={<ManagerDashboard />} />
        <Route path="/manager/self-dashboard" element={<SelfDashboard />} />

        <Route path="/manager/employees" element={<EmployeesPage />} />
        <Route path="/manager/add-employee" element={<AddEmployee />} />

        <Route path="/manager/departments" element={<DepartmentsPage />} />
        <Route path="/manager/add-department" element={<AddDepartment />} />

        <Route path="/manager/designations" element={<DesignationsPage />} />
        <Route path="/manager/add-designation" element={<AddDesignation />} />

        <Route path="/manager/holidays" element={<HolidaysPage />} />
        <Route path="/manager/add-holiday" element={<AddHoliday />} />

        <Route path="/manager/attendance-details" element={<AttendanceDetailsPage />} />
        <Route path="/manager/attendance-summary" element={<AttendanceSummaryPage />} />

        <Route path="/manager/settings-profile" element={<SettingsProfilePage />} />

        <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
    
        <Route path="/employee/leaves" element={<EmployeeLeavesPage />} />
        <Route path="/employee/add-leave" element={<AddEmployeeLeave />} />
        <Route path="/employee/holidays" element={<EmployeeHolidaysPage />} />

     
        <Route path="/employee/appreciations" element={<EmployeeAppreciationsPage />} />
        <Route path="/employee/attendance" element={<EmployeeAttendancePage />} />
        
  
        <Route path="/employee/profile" element={<EmployeeProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;