var express = require('express');
var app = express();
var path = require("path");
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var sockio = require("socketio-file-upload");
app.use(sockio.router);

app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res){
	console.log("test");
	res.sendFile('index.html');
})

io.on('connection', function(socket){
	socket.username = ""

	socket.on("given_username", function(name){
        socket.username = name.username;
    });

    socket.on('chat message', function (msg) {
        io.emit('chat message', socket.username + ": " + msg);
    });
    socket.on('disconnect', function(){
    	io.emit('chat message', socket.username + ": has disconnected");
    })
	console.log('an user connected');
	io.emit('chat message', "a user has connected");
	})


io.on('connection', function(socket){
	var uploader = new sockio();
	uploader.dir = "/uploads";
	uploader.listen(socket);
})

http.listen(3000, function(){
	console.log('listening on :3000');
})