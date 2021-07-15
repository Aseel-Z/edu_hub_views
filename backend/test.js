function setUpSocket(params) {
    socket = io('http://172.26.112.1:3000');
    // deploy - react
    socket.on('chat message' , msg => {
    setChatMessages([...chatMessages, msg]) 
}

function submitChatMessage () {
    socket.emit('chat message', chatMessages);
    setChatMessages([])}

