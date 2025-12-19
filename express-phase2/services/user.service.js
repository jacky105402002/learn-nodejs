const AppError = require("../errors/AppError");

function getAllUsers() {
  const users = [];

  if (users.length === 0) {
    throw new AppError("No users found", 404);
  }

  return users;
}

module.exports = {
  getAllUsers,
};
