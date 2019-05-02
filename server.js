const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
const ServerRouter = require('./routes');
const pages =  express.static(__dirname + "/public");
const cors = require("cors");

app.use("/", pages);
// app.use(cors());
app.use(bodyParser.json());
app.options('*', cors())
ServerRouter(app);
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || PORT);