class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // 可選：標記「可預期錯誤」
  }
}

module.exports = AppError;
