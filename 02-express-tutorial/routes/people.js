const express = require("express");
const router = express.Router();
let { people } = require("../data");
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", createPerson);

router.post("/postman", createPersonPostman);

router.put("/:id", updatePerson);

/*router.get("/", (req, res) => {
  const individualPeople = people.map((person) => {
    const { id, name } = person;
    return { name, id };
  });
  res.status(200).json({ data: individualPeople });
});*/

module.exports = router;
