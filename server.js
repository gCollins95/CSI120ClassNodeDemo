var express = require('express');
var app = express();

  var output = {
      "name": "Guthrie Collins",
      "vacation" : {"place": ["44.59, -72.35", "40.010, -75.259", "18.220, -66.59"]}
    };
app.get('/', function(req, res){
  res.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port);