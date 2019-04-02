const express = require('express');
const router = express.Router();
const data = require("../data");
const patientData = data.patients;

router.post('/insert/general', async (req, res) => {
  try {
    const insertGeneral = await patientData.insertGeneral(req.body);
    res.json(insertGeneral);
  }
  catch (e){
    res.send(500).json({ route: "get", error: e});
  }
});

router.post('/update', async (req, res) => {
  try {
    const insertGeneral = await patientData.updateGeneral(req.body);
    res.json(insertGeneral);
  }
  catch (e){
    res.send(500).json({ route: "get", error: e});
  }
})

router.post('/delete', async (req, res) => {
  try {
    const insertGeneral = await patientData.deleteGeneral(req.body);
    res.json(insertGeneral);
  }
  catch (e){
    res.send(500).json({ route: "get", error: e});
    }
})

// router.post('/query', async (req, res) => {
//   con.query(
//     'SELECT FROM patients where id = ?',
//     [req.body.id],
//     (err, result) =>{
//       if (err){
//         throw err;
//       }
//       console.log('Data received succesfully');
//       return result
//   });
// })

module.exports = router;