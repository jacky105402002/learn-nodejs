function logInfo(message) {
  const now = new Date().toISOString();
  console.log(`[INFO] ${now} - ${message}`);
}

function logError(message) {
  const now = new Date().toISOString();
  console.error(`[ERROR] ${now} - ${message}`);
}

module.exports = {
  logInfo,
  logError,
};
