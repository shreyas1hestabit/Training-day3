function canAccessFinance(role) {
  // BUG: interns can access finance
  return role !== "employee";
}

module.exports = { canAccessFinance };

function canAccessDashboard(role) {
  return role === "admin" || role === "manager";
}

module.exports = { canAccessFinance, canAccessDashboard };
