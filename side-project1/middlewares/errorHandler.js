module.exports = (err, req, res, next) => {
  const status = err.statusCode || 500;

  // 建議：先用 console.error，後面再換 winston/pino
  console.error("[ERROR]", {
    status,
    message: err.message,
    code: err.code,
    path: req.path,
    method: req.method,
    details: err.details || null,
  });

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
    code: err.code || "INTERNAL_ERROR",
    details: err.details || null,
  });
};
