const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


server.listen(3000);

app.get('/', function (req, res) {
    res.sendFile(__dirname+ '/index.html')
    
});

io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on("update", () => {
        console.log("update")
        io.emit("update");
    })
})
// const sessionMiddleware = session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }});
// // register middleware in Express
// app.use(sessionMiddleware);
// // register middleware in Socket.IO
// io.use((socket, next) => {
//   sessionMiddleware(socket.request, {}, next);
//   // sessionMiddleware(socket.request, socket.request.res, next); will not work with websocket-only
//   // connections, as 'socket.request.res' will be undefined in that case
// });

// io.on('connection', (socket) => {
//   const session = socket.request.session;
//   session.connections++;
//   session.save();
// });

// const port = process.env.PORT || 3000;
// server.listen(port, () => console.log('server listening on port ' + port));