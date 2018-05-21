const io = require('socket.io-client')
import { _helper } from '../Function/API';

export default function () {
    const socket = io.connect('http://localhost:3000')
    
    function join(roomName) {
        socket.emit('create-room', roomName)
    }
    // nhận các socketID
    function receivedMessage() {
        socket.on('receivedMessage', (msg) => {
            roomName = msg.roomName;
            //  console.log(msg.roomName)
        })
    }
    // nhận các msg từ client đến room: 'room'
    function receivedMessageFromServer() {
       
        socket.on('server-send-msg-to-client', (msg) => {
            console.log(msg)
        })
    } 
    function message( msg, roomName) {
        _helper.fetchAPI( '/messages', { roomID: roomName, content: msg}, [], 'POST')
        .then((response) => {
            console.log(response)
        })
        socket.emit('message', msg)
    }
    function leave() {
        console.log('leave room success')
        socket.emit('leave-room')
    }
    return {
        join,
        leave,
        message,
        receivedMessage,
        receivedMessageFromServer
    }
}  