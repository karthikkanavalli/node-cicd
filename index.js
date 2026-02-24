const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/", (req, res) => {
  res.send("CI/CD POC Working Fine!");
});
app.get("/test", (req, res) => {
  res.status(200).send("CI/CD POC Working Fine! Test Endpoint newly added");
});

app.get("/test2", (req, res) => {
  res.status(200).send("CI/CD POC Working Fine! Test Endpoint 2 newly added");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});