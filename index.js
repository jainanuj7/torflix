var express = require('express');
var app = express();
var path = require('path');
var bodyparser= require('body-parser');
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

// viewed at http://localhost:8080'
app.use(express.static(path.join(__dirname, '/')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/stream', function (req, res) {
    const { exec } = require('child_process');
  exec('peerflix'+ ' "' +req.body.url+  '" --vlc');

})

app.listen(8080);