const express = require('express');
const mysql = require('mysql');
const creds = require('../credentials.json');
const app = express();
const ServerRouter = express.Router();

const con = mysql.createConnection({
  host: creds.host,
  user: creds.user,
  password: creds.password,
  database: creds.database,
  multipleStatements: true
});

con.connect((err) => {
if (err) throw err;
console.log("Successfully connected to: " + creds.database);
});

ServerRouter.route('/insert').post((req, res) => {
    con.query(
        'INSERT INTO test SET ?', 
        req, 
        (err, res) =>{
        if(err)
          throw err;
        console.log('Last ID', res.insertId);
      });
});

ServerRouter.route('/update').post((req, res) => {
  con.query(
    'UPDATE test SET ' + req.column + '= ? Where id = ?',
    [req.update, req.id],
    (err, res) =>{
      if(err)
        throw err;
      console.log(`Rows changed: ${res.changedRows}`);
    });
})

ServerRouter.route('/delete').post((req, res) => {
  con.query(
    'DELETE FROM test WHERE id = ?', 
    [req.id],
    (err, result) =>{
      if(err)
        throw err;
      console.log(`Deleted ${result.affectedRows}`);
    });
})

ServerRouter.route('/query').post((req, res) => {
  con.query(
    'SELECT FROM patients where id = ?',
    [req.id],
    (err, res) =>{
      if(err)
        throw err;
      console.log('Data received succesfully');
      console.log(rows);
  });
})

module.exports = ServerRouter;