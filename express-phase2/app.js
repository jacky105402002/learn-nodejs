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
