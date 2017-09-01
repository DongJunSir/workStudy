/**
 * Created by Administrator on 2017/8/31 0031.
 */
var mongo = require("mongodb");
var assert = require("assert");

var MongoClient = mongo.MongoClient;//开启服务

var urls = "mongodb://localhost:27017/dj_dev";//url储存 放在连接池中

MongoClient.connect(urls,function(err,db){
    assert.equal(null,err);//使用断言代替以前的if判断
    //查找操作
    // db.collection("t1").find({"name":"xiaoming"}).toArray(function(err,result){
    //     assert.equal(null,err);
    //
    //     console.log(result);
    //
    //     db.close();
    // })
    //删除操作
    // db.collection("t1").deleteOne({"name":"xiaoming"},function(err,result){
    //     assert.equal(null,err);
    //
    //     console.log(result);
    //
    //     db.close();
    // })
    //修改操作
    db.collection("t1").update({"name":"xiaoming"},{$set:{"name":"xiaoming1"}},function(err,result){
        assert.equal(null,err);

        console.log(result);
        db.close();
    })


})