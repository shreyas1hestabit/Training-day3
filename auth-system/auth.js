
// Access rules updated by Team A


function canAccessFinance(role) {
  return role === "admin";
}

function canAccessDashboard(role) {
  return role === "admin" || role === "manager";
}

module.exports = { canAccessFinance, canAccessDashboard };

// tempprary debug log for stash demo
