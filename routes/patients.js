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
    res.status(500).send();
  }
});

router.put('/', async (req, res) => {
  try {
    const attach = await patientData.addAnswers(req.body);
    res.status(200).send(attach);
  }
  catch (e){
    console.log(e);
    res.status(500).send({ route: "put", error: e});
  }
});

router.get('/', async (req, res) => {
  try {
    const read = await patientData.read(req.body);
    res.status(200).send(read);
  }
  catch (e){
    res.status(500).json({ route: "get", error: e});
  }
})

module.exports = router;