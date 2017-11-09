var express = require('express');
var querystring = require('querystring');
var request = require('request');
var app = express();


// 请求电影列表数据
app.get('/getMovieList', function (req, res) {
    console.log("有服务请求了");
    //console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge'));
    //req.queryString="http:123.45.6.78:2000/getMovieList?start=5&callback=funccallbak"

    //res.end(funccallbak({name:23,age:343}));
    //
    var listType=req.query.listType;
    console.log(listType);

    // 在node里面用cors跨域
    // 在express中设置跨域
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //res.header("X-Powered-By",' 3.2.1')



    // 1、服务器请求服务器是不涉及跨域问题的，用node内置的request模块进行请求，这个request模块其实是把http模块又给封装了一下
    request("https://api.douban.com/v2/movie/"+listType, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(response.body));
        }
    })

})

// 请求电影详细页面
app.get('/getMovieDetail', function (req, res) {
    console.log("获取详细数据");

    var id=req.query.id;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //res.header("X-Powered-By",' 3.2.1')



    // 1、服务器请求服务器是不涉及跨域问题的，用node内置的request模块进行请求，这个request模块其实是把http模块又给封装了一下
    request("https://api.douban.com/v2/movie/subject/"+id, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(response.body));
        }
    })

})



app.get('/pingpp', function (req, res) {

    var pingpp = require('pingpp')('sk_test_ibbTe5jLGCi5rzfH4OqPW9KC');
    pingpp.setPrivateKeyPath(__dirname + "/rsa_private_key.pem");

    setTimeout(function () {
        pingpp.charges.create({
            subject: "支付demo",
            body: "请求银联网页支付",
            amount: 30000,//订单总金额, 人民币单位：分（如订单总金额为 1 元，此处请填 100）
            order_no: "123456789",
            channel: "upacp_pc",
            currency: "cny",
            client_ip: "127.0.0.1",
            app: {id: "app_1Gqj58ynP0mHeX1q"},
            extra: {result_url: "127.0.0.1"}
        }, function (err, charge) {
            if (err) {
                res.send(err);
            }
            res.send(charge);
        });
    }, 5000)

});

app.get('/result', function (req, res) {
    // 把真实的请求结果存到数据库
    //res.send(charge);
});

app.get('/sms', function (req, res) {

    var options = {
        url: 'https://api.sms.jpush.cn/v1/codes',
        headers: {
            'Authorization': 'IGQ0ODI0NjkwMDY2NGI1ODk3OWFmMTM4NTo4M2ExNDg3Y2YwODFmZGQzMzIwM2Q1ODk='
        }
    };

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);

            res.send(info);
        }
    });


});


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
