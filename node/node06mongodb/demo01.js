/**
 * Created by Administrator on 2017/8/30 0030.
 */
var mongo = require("mongodb");
var assert = require("assert");

var MongoClient = mongo.MongoClient;

var urls = "mongodb://localhost:27017/dj_dev";

MongoClient.connect(urls,function(err,db){

    assert.equal(null,err);

    db.collection("t1").insert({"name":"xiaoming"},function(err,result){
        assert.equal(null,err);

        console.log(result);

        db.close();
    });
});

