const express = require('express');
const router = express.Router();
const data = require("../data");
const questionData = data.questions;

app.use((req, res, next)  =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// router.post('/', async (req, res) => {
//   try {
//     const insert = await questionData.insert(req.body);
//     res.status(200).send(insert);
//   }
//   catch (e){
//     res.status(500).send();
//   }
// });

module.exports = router;