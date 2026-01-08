function logAccess(user, resource, allowed) {
  console.log(
    `[ACCESS] User=${user}, Resource=${resource}, Allowed=${allowed}`
  );
}

module.exports = logAccess;
