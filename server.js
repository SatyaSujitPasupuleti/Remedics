const express = require('express');
const app = express();
const PORT = 4000;
const bodyParser = require("body-parser");
const ServerRouter = require('./routes');
const pages =  express.static(__dirname + "/public");
const cors = require("cors");

app.use(cors());
app.options('*', cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", pages);
ServerRouter(app);

app.listen(process.env.PORT || PORT);