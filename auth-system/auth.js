// Access rules updated by Team A

function canAccessFinance(role) {

  return role === "admin";
=======

  return role == "admin";
>>>>>>> 7137f4a (Commit 9(FIX): restrict finance access to admin only)
}

function canAccessDashboard(role) {
  return role === "admin" || role === "manager";
}

module.exports = { canAccessFinance, canAccessDashboard };

