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

router.post('/insert/general', async (req, res) => {
    con.query(
        'INSERT INTO test SET ?', 
        req.body, 
        (err, result) =>{
        if (err){
          throw err;
        }
        console.log('Last ID', result.insertId);

        return ('Last ID', result.insertId);
      });
});

router.post('/update', async (req, res) => {
  con.query(
    'UPDATE test SET ' + req.body.column + '= ? Where id = ?',
    [req.body.update, req.body.id],
    (err, result) =>{
      if (err){
        throw err;
      }

      console.log(`Rows changed: ${result.changedRows}`);

      return `Rows changed: ${result.changedRows}`;
    });
})

router.post('/delete', async (req, res) => {
  con.query(
    'DELETE FROM test WHERE id = ?', 
    [req.body.id],
    (err, result) =>{
      if (err){
        throw err;
      }
      console.log(`Deleted ${result.affectedRows}`);

      return (`Deleted ${result.affectedRows}`);
    });
})

router.post('/query', async (req, res) => {
  con.query(
    'SELECT FROM patients where id = ?',
    [req.body.id],
    (err, result) =>{
      if (err){
        throw err;
      }
      console.log('Data received succesfully');
      return result
  });
})

module.exports = router;