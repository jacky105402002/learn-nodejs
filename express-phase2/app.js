const express = require("express");

const app = express();
const PORT = 3000;

// 👇 全域 middleware
app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next(); // 放行
});

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/time", (req, res) => {
  res.json({ now: new Date().toISOString() });
});

function checkApiKey(req, res, next) {
  const apiKey = req.query.apiKey;

  if (!apiKey) {
    return res.status(401).json({ error: "Missing apiKey" });
  }

  next();
}

app.get("/secure", checkApiKey, (req, res) => {
  res.json({ message: "You passed the middleware!" });
});

function mw1(req, res, next) {
  console.log("mw1");
  next();
}

function mw2(req, res, next) {
  console.log("mw2");
  next();
}

app.get("/chain", mw1, mw2, (req, res) => {
  res.send("done");
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
