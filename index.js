const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("CI/CD POC Working Fine!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});