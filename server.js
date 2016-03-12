var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var CONFIG = require('./config/config.json');
var PORT = process.env.PORT || 3000;

var session = require('express-session');

var methodOverride = require('method-override');
// var flash = require('connect-flash');
// var bcrypt = require('bcrypt');
var userId;
var Event = require('./db/event.js');

app.get();







app.listen(PORT, function(){
  process.stdout.write(`server listening on port ${PORT}`);
});