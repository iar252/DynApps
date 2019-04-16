var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
	io.emit('chat message', "user connected");
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	})
	socket.on('chat message', function(name){
		io.emit('chat message', name + " is here");
	})
	// socket.on('connect', () =>{
	// 	console.log(socket.id);
	// })
})

http.listen(3000, function(){
  console.log('listening on *:3000');
});

