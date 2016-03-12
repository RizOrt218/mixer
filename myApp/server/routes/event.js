var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
//var db = require('./../../models');
//var Event = db.Event;

router.use(bodyParser.json());

router.get('/',function(request, response){
  /*Event.findAll()
    .then(function(data){
      response.render('events',{
        events : data
    });
  });*/
});

router.get( '/:id', function( req, res) {
  /*Event.findOne({
    where:{
      id: req.params.id
    }
  })
  .then (function (events){
    res.json( events );
  });*/
});
/*
router.post('/', function(req, res){
  console.log('event router', req.body);
  Event.create({
    name : req.body.name,
    passcode : req.body.passcode
  })
  .then(function(data){
    return res.json(data);
  });
});
*/

router.post('/shuffle_room', function(req, res) {
   
});

router.post('/join_room', function(req, res) {
   console.log('room joined', req.body);
   return res.json({
       
   });
});


router.post('/create_room', function(req, res){
  console.log('room created', req.body);
  /*Event.create({
    name : req.body.name,
    passcode : req.body.passcode
  })
  .then(function(data){
    return res.json(data);
  });*/
});

module.exports = router;