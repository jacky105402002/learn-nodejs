const ValidationError = require("../errors/ValidationError");

function isValidEmail(email) {
  // 簡單版驗證（先不要追求完美）
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function register(req, res, next) {
  try {
    const { email } = req.body;

    const details = [];

    if (!email) {
      details.push({ field: "email", reason: "required" });
    } else if (!isValidEmail(email)) {
      details.push({ field: "email", reason: "invalid format" });
    }

    if (details.length > 0) {
      throw new ValidationError(details);
    }

    res.json({
      success: true,
      message: "Register payload is valid (demo)",
    });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  register,
};
