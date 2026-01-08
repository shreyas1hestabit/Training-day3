function canAccessFinance(role) {
  // BUG: interns can access finance
  return role !== "employee";
}



function canAccessDashboard(role) {
  return role === "admin" || role === "manager";
}

module.exports = { canAccessFinance, canAccessDashboard };
