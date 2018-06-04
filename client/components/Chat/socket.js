const io = require('socket.io-client')
import { _helper } from '../Function/API';

export default function () {
    const socket = io.connect('http://localhost:3000')
    
  function registerHandler(onMessageReceived) {
    socket.on('message', onMessageReceived)
  }
  function unregisterHandler() {
    socket.off('message')
  }
    
    function join(roomID) {
        socket.emit('create-room', roomID)
    }
    // nhận các socketID
    function receivedMessage() {
        socket.on('nhan-tn', (msg) => {
            console.log(msg)
        })
    }
    // nhận các msg từ client đến room: 'room'
    function receivedMessageFromServer() {
       
        socket.on('server-send-msg-to-client', (msg) => {
            console.log(msg)
        })
    } 
    function message(roomID, msg, cb) {
        _helper.fetchAPI( '/messages', { roomID: roomID, content: msg}, [], 'POST')
        socket.emit('message', { roomID: roomID, message: msg }, cb)
      }
    // function message( msg, roomName) {
    //     // _helper.fetchAPI( '/messages', { roomID: roomName, content: msg}, [], 'POST')
    //     // .then((response) => {
    //     //     console.log(response)
    //     // })
    //     socket.emit('message', msg )
    // }
    function leave(roomID) {
        socket.emit('leave-room', roomID)
    }
    return {
        join,
        leave,
        message,
        receivedMessage,
        receivedMessageFromServer,
        registerHandler,
        unregisterHandler
    }
}  