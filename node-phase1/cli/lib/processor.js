const crypto = require("crypto");

function processContent(content, mode) {
  switch (mode) {
    case "--upper":
      return content.toUpperCase();
    case "--lower":
      return content.toLowerCase();
    case "--hash":
      return crypto.createHash("sha256").update(content).digest("hex");
    default:
      throw new Error("Unsupported mode");
  }
}

module.exports = {
  processContent,
};
