var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var app = express();
var options = {
    key: fs.readFileSync(__dirname+'/invalid_certs/trial.key'),
    cert: fs.readFileSync(__dirname+'/invalid_certs/trialcert.cert')
  };
var server = https.createServer(options, app);
server.listen(443);
console.log("Running on port 443")
app.get('/', function (req, res) {
    app.use('/static',express.static(__dirname+'/static'));
    res.sendFile(__dirname+'/public/index.html');
});