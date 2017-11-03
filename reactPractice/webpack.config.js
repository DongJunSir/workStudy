/**
 * Created by Administrator on 2017/9/1 0001.
 */
var path = require("path");

module.exports = {
    entry:[
        path.resolve(__dirname,"./app/main.js")
    ],
    //entry:path.resolve(__dirname,"./app/main.js"),
    output:{
        path:path.join(__dirname,"./"),
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                loader:"babel-loader?presets[]=es2015&presets[]=react",
                exclude:/node_modules/
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