import React, {Component} from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';

>>>>>>>  deploy mern to heroku
export default class App extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
<<<<<<< HEAD
      <div> App componentaaaa</div>
>>>>>>> build client success !!!
=======
      <div>
        <h1> App component</h1>
        <button >Click me</button>
        <Link to='/home'>home</Link>
      </div>

>>>>>>>  deploy mern to heroku
    )
  }
}
