const express = require('express');
const mysql = require('mysql');
const creds = require('./credentials.json');
const app = express();
const PORT = 3000;
const ServerRouter = require('./routes/ServerRouter.js');

app.use('/serverport', ServerRouter);
const con = mysql.createConnection({
  host: creds.host,
  user: creds.user,
  password: creds.password,
  database: creds.database,
  multipleStatements: true
});

con.connect((err) => {
  if (err) 
    throw err;
  console.log("Successfully connected to: " + creds.database);
});

app.listen(PORT, () =>{
    console.log(`Server running on PORT:${PORT}`);
})