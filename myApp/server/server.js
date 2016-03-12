"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var CONFIG = require('./../config/config.json');
var PORT = process.env.PORT || 3000;

var session = require('express-session');

var methodOverride = require('method-override');
// var flash = require('connect-flash');
// var bcrypt = require('bcrypt');
var userId;
var db = require('./../models');
var Event = db.Event;

app.use(session(CONFIG.SESSION));

app.use('/event', require('./routes/event.js'));

var server = app.listen(PORT, function(){
  db.sequelize.sync();
  process.stdout.write(`server listening on port ${PORT}`);
});