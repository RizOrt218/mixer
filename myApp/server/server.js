"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

//var CONFIG = require('./../config/config.json');
var PORT = process.env.PORT || 3000;

var session = require('express-session');

var methodOverride = require('method-override');
// var flash = require('connect-flash');
// var bcrypt = require('bcrypt');
//var userId;
//var db = require('./../models');
//var Event = db.Event;

//app.use(session(CONFIG.SESSION));

app.use('/event', require('./routes/event.js'));

app.use(express.static(__dirname + '/../www'));
console.log(__dirname + '/../www');
app.get('/', function (req, res) {
   res.sendFile('index.html') ;
});

var server = app.listen(PORT, function(){
  //db.sequelize.sync();
  process.stdout.write('server listening on port ' + PORT);
});

var rooms = [];
var colors = ['red','blue','green', 'yellow'];

var io = require('socket.io').listen(server);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
     
    console.log('user disconnected' + socket);
  });
  socket.on('create', function (room) {
        rooms.push(room);
        socket.join(room);
        console.log(room + ' created');
  });
  socket.on('join', function (room, passcode) {
      var arrayLength = rooms.length;
      for (var i = 0; i < arrayLength; i++) {
            if(rooms[i] === room) {
                console.log(room + ' joined');
                break;
            }
            else {
                console.log(room + ' not found');
            }
            socket.emit(colors[Math.random() *  (3 - 0) + 0]);
      }
  });
  socket.on('sendcolors', function(data) {
      console.log('send colors');
     io.sockets.in(socket.room).emit('updatecolors', "purple", data); 
  });
  
});