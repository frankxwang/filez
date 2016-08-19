var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + "/" + process.argv[3]);
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(parseInt(process.argv[2]), function(){
  console.log('listening on *: ' + process.argv[2]);
});


/*var app = require('express')();
if(process.argv[2] == "server") {
	var server = net.createServer(function(socket) {
		socket.write('Echo server\r\n');
		socket.pipe(socket);
	});
	server.listen(1337, '0.0.0.0');
	console.log("SERVER UP");
} else {
	var client = new net.Socket();
		client.connect(1337, process.argv[2], function() {
		console.log('Connected');
		client.write('Hello, server! Love, Client.');
	});

	app.get('/', function(req, res){
	  res.sendFile(process.argv[3]);
	});

	client.on('data', function(data) {
		console.log('Received: ' + data);
		//client.destroy(); // kill client after server's response
	});

	client.on('close', function() {
		console.log('Connection closed');
	});
}*/
