import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import checkAuthenticate from '../Function/checkAuthenticate'
import { Row, Col } from 'reactstrap';
import ItemChat from './components/ItemChat';
import { ListGroup } from 'react-bootstrap';
import FormChat from './components/FormChat'
import socketIOClient from 'socket.io-client';
import ItemFormChat from './components/ItemFormChat'
import socket from './socket'

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      openFormchat: false,
      client: socket(),
      roomName: '',
    }
  }

  checkAuth = () => {
    checkAuthenticate().then((authenticate) => {
      this.setState({
        authenticate: authenticate
      })
    })
  }
  toggleFormChat = (roomName) => {
    return this.state.client.join(roomName);

  }
  componentDidMount() {
    //this.checkAuth();
  }
  render() {

    const { authenticate, openFormchat, client } = this.state;
    const listUser = [
      { name: 'a', age: 9 },
      { name: 'b', age: 9 },
      { name: 'c', age: 9 },
    ]
    client.receivedMessage();
    client.receivedMessageFromServer();
    return (
      

      <div>
        <Sidebar />
        <Slide />
        <input onChange={(e) => this.setState({roomName: e.target.value})} />
        <button onClick={() => {this.toggleFormChat(this.state.roomName)}}>Click</button>
        <Row>
          <Col xs={3} >
            <ListGroup>
              {listUser && listUser.map((user, i) => {
                return <ItemChat key={i} toggleFormChat={this.toggleFormChat}  user={user} />
              })}

            </ListGroup>
          </Col>
          <Col xs={9} >
          <ItemFormChat/>
            <FormChat  />
          </Col>
        </Row>
        <footer style={{ height: '100px' }}></footer>
      </div>
    )
  }
}
