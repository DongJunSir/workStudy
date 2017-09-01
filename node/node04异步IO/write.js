/**
 * Created by Administrator on 2017/6/16 0016.
 */
var fs = require("fs");

var rs = fs.createReadStream("a.txt");
var ws = fs.createWriteStream("b.txt"); //写入流
rs.setEncoding("utf-8");

//监听当有数据流入的时候
rs.on("data",function(chunc){
    console.log("..."); //读的过程中，我们打印三个点。
    ws.write(chunc,"utf-8"); //向文件写入东西
});


rs.on("end",function(){
    console.log("没有数据了");
    ws.end();                 //关闭写入流
});
