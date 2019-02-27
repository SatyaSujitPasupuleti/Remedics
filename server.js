const express = require('express');
//const mysql = require('mysql');
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
const ServerRouter = require('./routes/ServerRouter');

app.use("/serverport", ServerRouter);
app.use(bodyParser.json());
// ServerRouter(app);
// const con = mysql.createConnection({
//   host: creds.host,
//   user: creds.user,
//   password: creds.password,
//   database: creds.database,
//   //don't think we'll need this
//   //multipleStatements: true
// });

// con.connect((err) => {
//   if (err){
//     throw err;
//   }
//   console.log("Successfully connected to: " + creds.database);
// });

app.listen(PORT, () =>{
    console.log(`Server running on PORT: ${PORT}`);
})