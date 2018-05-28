import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import checkAuthenticate from '../Function/checkAuthenticate'

import ItemChat from './components/ItemChat';
import { ListGroup } from 'react-bootstrap';
import FormChat from './components/FormChat'
import socketIOClient from 'socket.io-client';
import ItemFormChat from './components/ItemFormChat'
import socket from './socket';
import { _helper } from '../Function/API'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import MainLayout from './MainLayout.jsx';
import Loader from './Loader.jsx';
import Home from './Home.jsx';
import Chatroom from './Chatroom.jsx';
import ChatroomPreview from './ChatroomPreview.jsx'

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      openFormchat: false,
      client: socket(),
      roomName: null,
      listFriends: [],
      user: {},
      chatRooms: [],
      activeTab: '1'
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
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
    _helper.fetchGET('/chatRooms/byUser', [])
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ chatRooms: data.data })
          console.log(data.data)
        }
      })
  }

  joinRoom = (friend_id) => {
    _helper.fetchAPI(
      '/chatRooms',
      {
        recipientID: friend_id
      }, [], 'POST'
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          console.log(data)
          //this.setState({ roomName: data.data._id })
        }
      })
  }

  toggleFormChat = (roomID) => {
    //this.joinRoom(friend)
    return this.state.client.join(roomID);

  }
  // getListChat = () => {
  //   _helper.fetchGET(
  //     '/roomofuser', []
  //   )
  //     .then((response) => {
  //       console.log(response)
  //     })
  // }
  getFriends = () => {
    _helper.fetchGET(
      '/users/getFriends', []
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          console.log(data)

        }
      })

  }
  getUser = () => {
    _helper.fetchGET(
      '/users', []
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ listFriends: data })
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
        user={this.state.user}
        // onLeave={
        //   () => alert('a')
        // this.onLeaveChatroom(
        //   chatroom.name,
        //   () => history.push('/')
        // )
        // }
        onSendMessage={
          (message, cb) => this.state.client.message(
            chatroom._id,
            message,
            cb
          )
        }
        registerHandler={this.state.client.registerHandler}
        unregisterHandler={this.state.client.unregisterHandler}
      />
    )
  }

  componentDidMount() {
    this.checkAuth();
    this.getUser();
    this.getChatRooms();
    this.getFriends();
    // this.joinRoom(this.state.user._id)
    //this.getListChat();
  }
  render() {
    const { authenticate, openFormchat, client, listFriends, user } = this.state;
    if (!authenticate) {
      return (
        <Redirect to={'/login'}></Redirect>
      )
    }
    return (


      <div>
        <Sidebar user={user} >
        <Slide />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Chat Room
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Friends
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
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
                        user={user}
                        chatRooms={this.state.chatRooms}
                        listFriends={listFriends}
                        joinRoom={(friend_id) => this.joinRoom(friend_id)}
                        onEnterChatroom={
                          roomID => this.toggleFormChat(roomID)
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
              </Switch>
            </MainLayout>
          </MuiThemeProvider>
        </BrowserRouter>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
       </Sidebar>
      </div>
    )
  }
}
