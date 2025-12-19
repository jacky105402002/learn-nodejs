const express = require("express");
const app = express();

const authRoutes = require("./routes/auth.routes");
const errorHandler = require("./middlewares/errorHandler");

// 解析 JSON body
app.use(express.json());

// routes
app.use("/auth", authRoutes);

// 404（可選，但建議有）
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
    code: "NOT_FOUND",
    details: null,
  });
});

// error handler（一定放最後）
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
