/**
 * Created by Administrator on 2017/8/30 0030.
 */
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'files')));


app.listen(3000);