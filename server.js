var express = require('express');
  var app     = express();
  var path = require('path');
  
  // set the public folder to serve public assets
  app.use(express.static(__dirname + '/'));
  
  // set up our one route to the index.html file
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname + '/Angular-route-index.html'));
 });
 app.listen(8080);
 console.log('port is running');

  /*var config = require('./config');
 
 var mongoose;
 // connect to our database (hosted on modulus.io)
 mongoose.connect(config.database); 
 
 // START THE SERVER
 // ====================================
 app.listen(config.port);
 console.log('Magic happens on port ' + config.port);*/