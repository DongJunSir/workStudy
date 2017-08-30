/**
 * Created by Administrator on 2017/8/30 0030.
 */
var fs = require('fs');

//读取文件 readFile
// fs.readFile("./a.txt","utf-8",function(err,data){
//     if(err) throw err;
//    console.log(err,data);
// });

//写入文件
//使用writeFile方法 将上一步读取的数据写入b.txt文件中
// fs.readFile("a.txt","utf-8",function(err,data){
//     if(err) throw err;
//     //读取的后续操作可以写在这里
//     fs.writeFile("./b.txt",data,function(err){
//         if(err) throw err;
//     })
// })

//1.写入的文件路径(如果没有此文件,node会自动创建一个b.txt)
//2.需要写入的数据
//3.回调函数,只有一份参数,当出现错误的时候,会有错误提示err

//追加文件
//writeFile是将内容替换掉,如果想要追加写入,可以使用appendFile方法
// fs.readFile("a.txt","utf-8",function(err,data){
//     if(err) throw err;
//     fs.appendFile("b.txt",data,function(err){
//         if(err) throw err;
//     })
// })

//删除文件,使用unlink方法
fs.unlink("./b.txt",function(err){
    if(err) throw err;
});

