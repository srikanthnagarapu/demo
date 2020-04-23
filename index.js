var express = require('express');
var app = express();
var fs = require("fs");

app.get('/about', function (req, res) {
   fs.readFile( __dirname + "/" + "data.js", 'utf8', function (err, data) {
      console.log( data );
      res.end('<h1>'+data+'</h1>');
   });
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})