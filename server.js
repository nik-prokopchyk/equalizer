
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.sendFile('./index.html');
});
// http://www.georgeandjonathan.com/#6