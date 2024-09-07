const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const Urlrouter = require("./router/Url")

const app = express();

app.use(bodyparser.json());

const DBURL =
  "mongodb+srv://bodyhassan0550:body312002%40@cluster0.i6vca26.mongodb.net/URL";

app.use(Urlrouter);  
mongoose.connect(DBURL).then(() => {
  console.log("connect");
  app.listen(8080);
});
