const express = require('express');
const mysql = require('mysql');
const creds = require('./credentials.json');
const app = express();
const PORT = 4000;
const ServerRouter = require('./routes/ServerRouter.js');

app.use('/serverport', ServerRouter);
const con = mysql.createConnection({
  host: creds.host,
  user: creds.user,
  password: creds.password,
  database: creds.database,
  //don't think we'll need this
  //multipleStatements: true
});

con.connect((err) => {
  if (err){
    throw err;
  } 
  console.log("Successfully connected to: " + creds.database);
});

app.listen(PORT, () =>{
    console.log(`Server running on PORT:${PORT}`);
})