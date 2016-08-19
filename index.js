var net = require('net');

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

	client.on('data', function(data) {
		console.log('Received: ' + data);
		client.destroy(); // kill client after server's response
	});

	client.on('close', function() {
		console.log('Connection closed');
	});
}
