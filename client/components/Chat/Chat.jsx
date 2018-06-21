import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Item from '../../container/item'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components'
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import checkAuthenticate from '../Function/checkAuthenticate'

import { ItemFriend } from './components/ItemChat';
import { ListGroup } from 'react-bootstrap';
import FormChat from './components/FormChat'
import socketIOClient from 'socket.io-client';
import ItemFormChat from './components/ItemFormChat'
import socket from './socket';
import { _helper } from '../Function/API'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './index.scss';
import MainLayout from './MainLayout.jsx';
import Loader from './Loader.jsx';
import Home from './Home.jsx';
import Chatroom from './Chatroom.jsx';
import ChatroomPreview from './ChatroomPreview.jsx'
import Notification from '../Notification/index.jsx';
import  Footer  from '../Footer/footer';

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
 
 `;
 const H3 = styled.h3`
  width: 300px;
 `;
 const Img = styled.img`
  &::before {
    transform: rotate(10deg);
    border: 1px solid gray;
  }
  &::after {
    transform: rotate(10deg);
    border: 1px solid gray;
  }
 `;

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
      activeTab: '1',
      show: false,
      message: '',
      type: 'info'
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
        }
      })
  }
  setTimeOutNotification = () => {
    setTimeout( ()=> this.setState({show: false}), 500)
  }
  joinRoom = (friend_id) => {
    const { history } = this.props;
    _helper.fetchAPI(
      '/chatRooms',
      {
        recipientID: friend_id
      }, [], 'POST'
    )
      .then((response) => {
        const { data, status } = response;
        debugger
        
        if (status == 200) {
          this.setState({activeTab: '1', show: true, message: data.msg})
          this.setTimeOutNotification();
        }
        setTimeout( () => this.getChatRooms(), 1000);
      })
  }

  toggleFormChat = (roomID) => {
    //this.joinRoom(friend)
    return this.state.client.join(roomID);

  }
  getFriends = () => {
    const { user } = this.state;
    _helper.fetchAPI(
      '/users/getFriends', { _id: user._id }
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ listFriends: data.data[0].friends })

        }
      })

  }
  
  renderChatroomOrRedirect(chatroom) {

    //const { chatHistory } = history.location.state

    return (
      <Chatroom
        chatroom={chatroom}
        chatRooms={this.getChatRooms}
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
    this.getChatRooms();
    this.getFriends();
    // this.joinRoom(this.state.user._id)
    //this.getListChat();
  }
  render() {
    const { authenticate, openFormchat, client, listFriends, user, show, message, type, chatRooms } = this.state;
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
                Create Room
            </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
         
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
                                  onClick={() => { this.toggle('2'); }}
                                  user={user}
                                  chatRooms={this.state.chatRooms}
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
         
            </TabPane>
            <TabPane tabId="2" className='list-friend' >
              
                  { listFriends.length > 0 ?
                     listFriends.map((friend, i) => (
                       <ItemFriend key={i} friend={friend} joinRoom={(friend_id) => this.joinRoom(friend_id)} />
                    ))
                    : 
                    (
                      <ContentWrapper >
                        <Img src='../../../assets/default-avatar.png' />
                        <H3>Những người bạn của bạn sẽ được hiển thị ở đây. Hãy kết bạn và 2 bạn có thể trò chuyện!</H3>
                      </ContentWrapper>
                    )
                    }
            </TabPane>
          </TabContent>
        </Sidebar>
        <Footer/>
        <Notification show={show} message={message} type={type}/>
      </div>
    )
  }
}
