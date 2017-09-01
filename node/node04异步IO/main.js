/**
 * Created by Administrator on 2017/6/16 0016.
 */
//异步IO操作
//将a.txt中的内容增加,以让读取的时间变长
//使用reateReadStream创建读取流对象,在对象上使用on监听"data"读取数据的事件,
//每读取一段数据,就会触发这个事件,当读取完毕,就会触发"end"事件。
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

