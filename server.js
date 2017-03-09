var http = require('http');


var server = http.createServer(function(request, response) {});
var WebSocketServer = require('websocket').server;

wsServer = new WebSocketServer({
  httpServer: server
});


wsServer.on('request', function(r){
    // Code here to run on connection
});










server.listen(1234, function() {
    console.log((new Date()) + ' Server is listening on port 1234');
});
