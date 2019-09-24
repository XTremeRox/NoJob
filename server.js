var express = require('express');
var http = require('http');
var app = express();

var server = require('http').createServer(app);
server.listen(3000);
console.log("Running on port 3000")
app.get('/', function (req, res) {
    app.use('/static',express.static(__dirname+'/static'));
    res.sendFile(__dirname+'/public/index.html');
});