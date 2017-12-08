/**
 * Created by Administrator on 2017/6/16 0016.
 */
//
var express = require("express");
var path = require("path");
var router = require("./router.js");
var app = express();

var files = express.static(path.join(__dirname,"files"));

//app.use("/",files);
app.use("/",router);

app.listen(3000);