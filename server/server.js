var express = require('express');
var path = require('path');
var router = require('./routes.js');
var bodyParser = require('body-parser');
// var db = require('../db/db.js')
var app = express();
var port = 3000;

app.use(express.static(path.join(__dirname, '/../client')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, function() {
  console.log('Listening on port: ' + port);
});

module.exports = app;
