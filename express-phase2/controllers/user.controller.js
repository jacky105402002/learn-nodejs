const userService = require("../services/user.service");

function getUsers(req, res) {
  const users = userService.getAllUsers();
  res.json(users);
}

module.exports = {
  getUsers,
};