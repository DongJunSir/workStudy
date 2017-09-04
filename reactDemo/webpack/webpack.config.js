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
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                query:{
                    presets:["react","es2015"]
                }
            },
            {
                test:/\.css$/, //配置.css后戳的解析
                loader:"style-loader!css-loader"
            },
            {
                test:/\.(png|jpg)$/, //配置静态文件解析
                loader:"url-loader?limit=8192"
            }

        ]
    }
}