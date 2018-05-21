import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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

import MainLayout from './MainLayout.jsx';
import Loader from './Loader.jsx';
import Home from './Home.jsx';
import Chatroom from './Chatroom.jsx';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      openFormchat: false,
      client: socket(),
      roomName: null,
      listFriend: [],
      user: {},
      chatRooms: []
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
  getChatRooms = () => {
    _helper.fetchGET( '/chatRooms/byUser', [])
    .then((response) => {
      const { data, status } = response;
      if( status == 200) {
        this.setState({ chatRooms: data.data})
      }
    })
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
        if (status == 200) {
          this.setState({ roomName: data.data._id })
        }
      })
  }

  toggleFormChat = (friend) => {
    //this.joinRoom(friend)
    return this.state.client.join(this.state.roomName);

  }
  getListChat = () => {
    _helper.fetchGET(
      '/roomofuser', []
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
  renderChatroomOrRedirect(chatroom) {

    //const { chatHistory } = history.location.state

    return (
      <Chatroom
      chatroom={chatroom}
      // chatroom={chatroom}
      // chatHistory={chatHistory}
      // user={this.state.user}
      // onLeave={
      //   () => alert('a')
      // this.onLeaveChatroom(
      //   chatroom.name,
      //   () => history.push('/')
      // )
      // }
      // onSendMessage={
      //   (message, cb) => this.state.client.message(
      //     chatroom.name,
      //     message,
      //     cb
      //   )
      // }
      // registerHandler={this.state.client.registerHandler}
      // unregisterHandler={this.state.client.unregisterHandler}
      />
    )
  }

  componentDidMount() {
    this.checkAuth();
    this.getUser();
    this.getChatRooms();
    // this.joinRoom(this.state.user._id)
    //this.getListChat();
  }
  render() {
    console.log(this.state.chatRooms)
    const { authenticate, openFormchat, client, listFriend, user } = this.state;
    if (!authenticate) {
      return (
        <Redirect to={'/login'}></Redirect>
      )
    }
    return (


      <div>
        <Sidebar user={user} />
        <Slide />

        <BrowserRouter>
          <MuiThemeProvider>
            <MainLayout
              user={user}
            >
              <Switch>
                <Route
                  exact
                  path="/chat"
                  render={
                    (props) =>
                      <Home
                        chatRooms = {this.state.chatRooms}
                        listFriend={listFriend}
                        onEnterChatroom={
                          chatroomName => this.toggleFormChat(chatroomName)
                        }
                      />
                  }

                />
                 {
                      this.state.chatRooms.map(chatroom => (
                        <Route
                          key={chatroom._id}
                          exact
                          path={`/${chatroom._id}`}
                          render={
                            props => this.renderChatroomOrRedirect(chatroom, props)
                          }
                        />
                      ))
                    }
                {/* <Route
                  exact
                  path={`/chatroom`}
                  render={
                    props => this.renderChatroomOrRedirect(props)
                  }
                /> */}

              </Switch>
            </MainLayout>
          </MuiThemeProvider>
        </BrowserRouter>
      </div>
    )
  }
}
