const express = require('express');
const router = express.Router();
let { people } = require("../data");


router.get("/", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "please provide name" });
  } else {
    res.status(201).json({ success: true, person: name });
  }
  // res.status(201).json({ data: "cool" });
});

router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ success: false, msg: "please provide name" });
  } else {
    res.status(201).json({ success: true, data: [...people, name] });
  }
});



router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));
   if (!person) {
     return res
       .status(404)
       .json({ success: false, msg: `please provide ${id}` });
   } else {
     const newPeople = people.map((person) => {
       if (person.id === Number(id)) {
         person.name = name
       }
       return person
     })
     res.status(200).json({success:true, data: newPeople})
   }
});

router.get("/", (req, res) => {
  const individualPeople = people.map((person) => {
    const { id, name } = person;
    return { name, id };
  });
  res.status(200).json({ data: individualPeople });
});

/*router.delete("/:id", (req, res) => {
  const { id } = req.params
  if (!person) {
    
  } else {
    people.map((person) => {
      if (person.id === Number(id){

      }
    }
  }
})*/

module.exports = router