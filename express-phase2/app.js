const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express");
});

app.get("/time", (req, res) => {
  res.json({
    now: new Date().toISOString(),
  });
});

app.get("/user", (req, res) => {
  console.log(req.method); // GET
  console.log(req.path); // /user
  console.log(req.query); // ?a=1
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
