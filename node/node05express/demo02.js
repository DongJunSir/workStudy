/**
 * Created by Administrator on 2017/6/16 0016.
 */
var express = require("express");
var app = express();

app.get('/',function(req,res){
   res.end("just index!");
});

app.get("/a/index",function(req,res){
    res.end("you get a !");
});

app.get("/b",function(req,res){
    res.end("you get b !");
});

app.listen(3000);

