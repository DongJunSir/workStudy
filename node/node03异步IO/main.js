/**
 * Created by Administrator on 2017/6/16 0016.
 */
var fs = require("fs");
var data = "";
var rs = fs.createReadStream("a.txt");

rs.setEncoding("utf-8");

rs.on("data",function(chunc){
    data += chunc;
    console.log("...");
});

rs.on("end",function(){
   console.log("没有数据了");
});

