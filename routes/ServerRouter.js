const express = require('express');
const mysql = require('mysql');
const creds = require('./credentials.json');
const router = express.Router();

const con = mysql.createConnection({
  host: creds.host,
  user: creds.user,
  password: creds.password,
  database: creds.database,
  //multipleStatements: true
});

con.connect((err) => {
  if (err){
    throw err;
  }
  console.log("Successfully connected to: " + creds.database);
});

router.get('/', async (req, res) => {
  res.render("/", {});
});

router.post('/insert/general', async (req, res) => {
    con.query(
        'INSERT INTO test SET ?', 
        req.body, 
        (err, res) =>{
        if(err){
          throw err;
        }
        console.log('Last ID', res.insertId);
      });
});

router.post('/update', async (req, res) => {
  con.query(
    'UPDATE test SET ' + req.body.column + '= ? Where id = ?',
    [req.body.update, req.body.id],
    (err, res) =>{
      if(err){
        throw err;
      }

      console.log(`Rows changed: ${res.changedRows}`);
    });
})

router.post('/delete', async (req, res) => {
  con.query(
    'DELETE FROM test WHERE id = ?', 
    [req.body.id],
    (err, result) =>{
      if(err){
        throw err;
      }
      console.log(`Deleted ${result.affectedRows}`);
    });
})

router.post('/query', async (req, res) => {
  con.query(
    'SELECT FROM patients where id = ?',
    //what's this
    [req.body.id],
    (err, res) =>{
      if(err){
        throw err;
      }
      console.log('Data received succesfully');
      res.send(data);
  });
})

module.exports = router;