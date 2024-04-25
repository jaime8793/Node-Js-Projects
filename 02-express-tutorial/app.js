const express = require("express");
const app = express();

const people = require('./routes/people')

app.use(express.static("./methods-public"));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/api/people',people)

app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    res.status(200).json({ success: true, name: name });
  } else {
    res.status(404).json({
      success: false,
      data: `${name} is not available please shape up`,
    });
  }
});



app.listen(5000, () => {
  console.log("server is listening on port 5000...");
});
