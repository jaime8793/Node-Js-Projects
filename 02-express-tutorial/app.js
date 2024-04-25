const express = require("express");
const app = express();
const logger = require('./logger')

app.get("/",logger , (req, res) => {
  res.send("home");
});

app.get("/", (req, res) => {
  res.send("About");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
