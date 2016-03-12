var express = require("express");
var app = express();

app.use(express.static(__dirname + '/myApp/www'));
app.get('/', function (req, res) {
   res.sendFile('index.html') ;
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("app listening on at http://%s%s", host,port);
});

app.post('/api/create', function(res, req) {
    console.log(req.body.text);
});