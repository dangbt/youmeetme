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
import socket from './socket';
import { _helper } from '../Function/API'

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      openFormchat: false,
      client: socket(),
      roomName: '',
      listFriend: [],
      user: {}
    }
  }

  checkAuth = () => {
    checkAuthenticate().then((response) => {
      this.setState({
        authenticate: response.authentication,
        user: response.data
      })
    })
  }
  toggleFormChat = (friend) => {
    this.joinRoom(friend)
    return this.state.client.join(this.state.roomName);

  }
  joinRoom = (friend) => {
    _helper.fetchAPI(
      '/chatRooms',
      {
        recipientID: friend
            }, [], 'POST'
    )
      .then((response) => {
        const { data, status } = response;
        if( status == 200 ) {
          this.setState({roomName: data.data._id})
        }
      })
  }
  getListChat = () => {
    _helper.fetchGET(
      '/roomofuser',[]
    )
    .then((response) => {
      console.log(response)
    })
  }
  getUser = () => {
    _helper.fetchGET(
      '/users', []
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ listFriend: data })
        }
      })

  }
  componentDidMount() {
    this.checkAuth();
    this.getUser();
    this.getListChat();
  }
  render() {

    const { authenticate, openFormchat, client, listFriend,user } = this.state;
      if (!authenticate) {
      return (
        <Redirect to={'/login'}></Redirect>
      )
    }
    client.receivedMessage();
    client.receivedMessageFromServer();
    return (


      <div>
        <Sidebar user={user} />
        <Slide />
        <input onChange={(e) => this.setState({ roomName: e.target.value })} />
        <button onClick={() => { this.toggleFormChat(this.state.roomName) }}>Click</button>
        <Row>
          <Col xs={3} >
            <ListGroup>
              {listFriend && listFriend.map((friend, i) => {
                return <ItemChat key={i} toggleFormChat={this.toggleFormChat} friend={friend} />
              })}

            </ListGroup>
          </Col>
          <Col xs={9} >
            <ItemFormChat />
            <FormChat />
          </Col>
        </Row>
        <footer style={{ height: '100px' }}></footer>
      </div>
    )
  }
}
