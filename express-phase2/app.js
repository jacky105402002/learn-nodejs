const express = require("express");
const app = express();

// 全域 middleware
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// routes
const userRoutes = require("./routes/user.routes");
app.use("/users", userRoutes);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// ❗ 一定要放在所有 routes 後面
app.use((err, req, res, next) => {
  const status = err.statusCode || 500;

  console.error("[ERROR]", {
    status,
    message: err.message,
    path: req.path,
    method: req.method,
  });

  res.status(status).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
