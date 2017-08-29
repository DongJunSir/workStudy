/**
 * Created by Administrator on 2017/6/16 0016.
 */
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.end("hello world");
})
app.listen(3000);