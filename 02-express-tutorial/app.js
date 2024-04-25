const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "please provide name" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
 // res.status(201).json({ data: "cool" });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).json({ success: true, name: name });
  } else {
    res
      .status(404)
      .json({
        success: false,
        data: `${name} is not available please shape up`,
      });
  }
});

app.get("/api/people", (req, res) => {
  const individualPeople = people.map((person) => {
    const { id, name } = person;
    return { name, id };
  });
  res.status(200).json({ data: individualPeople });
});

app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
