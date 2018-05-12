import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import Login from '../Login/Login.jsx';
import { Button } from 'reactstrap';
import socketIOClient from 'socket.io-client';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      endpoint: 'http://localhost:3000'
    }
  }
  handlingClick() {
    _helper.fetchGET(
      '/users',
      [{'Content-Type': 'javascript/json'}] )
      .then((response) => {
        this.setState({user: response});
        console.log(this.state.user);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on('hi', (msg) => {
      console.log(msg);
    })
    return (
      <div>
        <h1> App component</h1>
        <Link to='/login'>Log in</Link>       
      </div>
      )
    }

}
