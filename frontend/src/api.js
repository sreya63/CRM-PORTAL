const API_BASE_URL = "http://127.0.0.1:8000";

export const apiEndpoints = {
  login: `${API_BASE_URL}/login`,
  register: `${API_BASE_URL}/register`,
  contact: `${API_BASE_URL}/contact`,

  companies: `${API_BASE_URL}/companies`,
  subscriptions: `${API_BASE_URL}/subscriptions`,
  transactions: `${API_BASE_URL}/transactions`,
  superAdmins: `${API_BASE_URL}/super-admins`,
  websiteSettings: `${API_BASE_URL}/website-settings`,

  employees: `${API_BASE_URL}/employees`,
  departments: `${API_BASE_URL}/departments`,
  designations: `${API_BASE_URL}/designations`,
  holidays: `${API_BASE_URL}/holidays`,
  attendanceDetails: `${API_BASE_URL}/attendance-details`,
  attendanceSummary: `${API_BASE_URL}/attendance-summary`,
  rolesPermissions: `${API_BASE_URL}/roles-permissions`,
  profileSettings: `${API_BASE_URL}/profile-settings`,
  
  employeeDashboard: `${API_BASE_URL}/employee-dashboard`,
  employeeExpenses: `${API_BASE_URL}/employee-expenses`,
  addEmployeeExpense: `${API_BASE_URL}/employee-expenses`,
  employeeLeaves: `${API_BASE_URL}/employee-leaves`,
  addEmployeeLeave: `${API_BASE_URL}/employee-leaves`,
  employeeHolidays: `${API_BASE_URL}/employee-holidays`,
  employeeWeekends: `${API_BASE_URL}/employee-weekends`,
  employeeRemainingLeaves: `${API_BASE_URL}/employee-remaining-leaves`,
};

export async function postData(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return { ok: response.ok, data };
}

export async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return { ok: response.ok, data };
}