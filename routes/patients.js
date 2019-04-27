const express = require('express');
const router = express.Router();
const data = require("../data");
const patientData = data.patients;

router.post('/', async (req, res) => {
  try {
    const insert = await patientData.insert(req.body);
    res.status(200).send(insert);
  }
  catch (e){
    res.send(500).json({ route: "post", error: e});
  }
});

router.get('/', async (req, res) => {
  try {
    const read = await patientData.read(req.body);
    res.json(read);
  }
  catch (e){
    res.send(500).json({ route: "get", error: e});
  }
})

module.exports = router;