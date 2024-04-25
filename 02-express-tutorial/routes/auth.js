const express = require('express');
const router = express.Router()

router.post("/", (req, res) => {
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

module.exports = router
