require('dotenv').config();
var express = require("express");
var app = require('express')();
var routes = require('./routes');
const fetch = require('node-fetch');
const bodyParser = require("body-parser");
const mysql = require('mysql');
var path = __dirname + '/tt/views/';
app.use('/tt/assets',express.static(path + '/assets'));
console.log(path);

const appPort = 8085;
const appPrefix = '/tt';

app.use(appPrefix,routes);

//Start app
app.listen(appPort,function(){
    console.log("Server running at Port " + appPort);
  });