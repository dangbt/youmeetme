const io = require('socket.io-client')

export default function () {
    const socket = io.connect('http://localhost:3000')

    function join(roomName) {
        socket.emit('create-room', roomName)
    }
    // nhận các socketID
    function receivedMessage() {
        socket.on('receivedMessage', (msg) => {
            console.log(msg)
        })
    }
    // nhận các msg từ client đến room: 'room'
    function receivedMessageFromServer() {
        socket.on('server-send-msg-to-client', (msg) => {
            console.log(msg)
        })
    } 
    function message( msg) {
        socket.emit('message', msg)
    }
    return {
        join,
        message,
        receivedMessage,
        receivedMessageFromServer
    }
}  