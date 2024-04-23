const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./public"));

app.get("/", (req, res) => {
  console.log("user hit the resource");
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
  // res.send("Home page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1> resource not found </h1>");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
