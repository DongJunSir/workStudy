/**
 * Created by Administrator on 2017/9/1 0001.
 */
var path = require("path");

module.exports = {
    entry:{//入口文件
        "app":path.join(__dirname,"../app/main.js")//app对应生成的文件名
    },
    output:{
        path:path.join(__dirname,"../static/js/"),
        filename:"[name].js"        //这里[name]就是表示对应entry对象的name,然后生成的后戳是.js
    }
}