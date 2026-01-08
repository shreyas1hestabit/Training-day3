function canAccessFinance(role) {
  // BUG: interns can access finance
  return role !== "employee";
}

module.exports = { canAccessFinance };
