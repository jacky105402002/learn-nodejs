const userService = require("../services/user.service");

function getUsers(req, res, next) {
  try {
    const users = userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getUsers,
};
