import React, {Component} from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import Login from '../Login/Login.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
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
    return (
      <div>
        <h1> App component</h1>
        <Login/>
        <button onClick={this.handlingClick.bind(this)} >Click me</button>        
      </div>

=======
export default class App extends Component {

  render(){
    return (
      <div> App componentaaaa</div>
>>>>>>> build client success !!!
    )
  }
}
