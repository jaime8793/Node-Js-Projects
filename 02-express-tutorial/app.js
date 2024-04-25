const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.static("./methods-public"));

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
