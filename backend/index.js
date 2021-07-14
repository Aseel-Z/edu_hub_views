const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

// should send request to app 
server.listen(3000);

// app.get('/', function (req, res) {
//     res.sendFile(__dirname+ '/index.html')
    
// });

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('update', () => {
        console.log("update")
        io.emit('update');
        console.log("app.js")
    })
})


