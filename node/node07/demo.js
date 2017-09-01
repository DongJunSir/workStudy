/**
 * Created by Administrator on 2017/8/31 0031.
 */
var http = require("http");

http.createServer(function(request,response){
    response.end("hahahahhaha");
}).listen(3000);
//最好只对创建了http服务的node文件才用supervisor运行 如果一般文件这样运行会不断的重启 很耗费内存