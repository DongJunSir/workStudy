/**
 * Created by Administrator on 2017/6/16 0016.
 */

var express = require("express");
var rout = express.Router();

rout.get("/",function(req,res){
   res.send("首页");
});

rout.get("/edit",function(req,res){
    return res.redirect("/show.html");
});

rout.get("/img",function(req,res){
    res.send("<img src='kunling.jpg' />");
});

module.exports = rout;
