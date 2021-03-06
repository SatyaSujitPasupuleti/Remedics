const express = require('express');
const router = express.Router();
const data = require("../data");
const patientData = data.patients;

router.post('/create', async (req, res) => {
  try {
    const insert = await patientData.insert(req.body);
    res.status(200).send(insert);
  }
  catch (e){
    res.status(500).send();
  }
});

router.put('/answers', async (req, res) => {
  try {
    const attach = await patientData.addAnswers(req.body);
    res.status(200).send(attach);
  }
  catch (e){
    console.log(e);
    res.status(500).send({ route: "put", error: e});
  }
});

router.put('/questions', async (req, res) => {
  try {
    const attach = await patientData.addQuestions(req.body);
    res.status(200).send(attach);
  }
  catch (e){
    console.log(e);
    res.status(500).send({ route: "put", error: e});
  }
});

router.get('/getone', async (req, res) => {
  try {
    const read = await patientData.readOne(req.body);
    res.status(200).send(read);
  }
  catch (e){
    res.status(500).json({ route: "get", error: e});
  }
})

router.get('/getall', async (req, res) => {
  try {
    let getall = await patientData.read(req.body);
    res.status(200).send(getall);
  }
  catch (e){
    res.status(500).json({ route: "get", error: e});
  }
})

module.exports = router;