const express = require('express');
const router = express.Router();
const data = require("../data");
const questionData = data.questions;

router.post('/', async (req, res) => {
  try {
    const insert = await questionData.insert(req.body);
    res.status(200).send(insert);
  }
  catch (e){
    res.status(500).send();
  }
});

module.exports = router;