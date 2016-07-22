var express = require('express'),
    socketio = require('socket.io');

var app = express();
var port = process.env.PORT || 3000;
var server = app.listen(port);

var io = socketio.listen(server);

var staticDir = __dirname + '/public/';

var messages = [];

app.get('/', function (req, res) {
    res.sendFile(staticDir + 'index.html');
});

io.on('connection', function(socket) {

    console.log('Client connected');

    socket.on('disconnect', function() {
        console.log('Client disconnected');
    });

    socket.on('chat message', function(msg) {
        messages.push(msg);
        io.emit('chat message', msg);
    });

    socket.emit('chat history', messages);

});