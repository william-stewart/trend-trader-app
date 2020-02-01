const routes = require('express').Router();
var path = require('path');
var pathViews = path.join(__dirname, '../tt/views/');
var express = require("express");
var app = express();
var router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/',router);
//app.use('/tt/assets',express.static(path.join(__dirname, '../tt/views/assets')));

routes.get('/', (req, res) => {
    res.sendFile(pathViews + 'index.html');
  });

routes.get('/index.html',function(req, res){
    res.sendFile(pathViews + 'index.html');
  });

routes.get('/dash-account.html',function(req, res){
    res.sendFile(pathViews + 'dash-account.html');
  });

routes.get('/dash-summary.html',function(req, res){
    res.sendFile(pathViews + 'dash-summary.html');
  });

routes.get('/profile.html',function(req, res){
    res.sendFile(pathViews + 'profile.html');
  });

module.exports = routes;
