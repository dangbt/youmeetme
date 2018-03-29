import React, {Component} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import Login from '../Login/Login.jsx';
import { Button } from 'reactstrap';

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
<<<<<<< HEAD
  }


  render(){
    return (
      <div>
        <h1> App component</h1>
        <Login/>
        <Button color="primary" onClick={this.handlingClick.bind(this)} >Click me</Button>        
      </div>

=======
=======
import { Link } from 'react-router-dom';

>>>>>>>  deploy mern to heroku
export default class App extends Component {
  constructor(props) {
    super(props);
=======
>>>>>>> solver conflit
  }


  render(){
    return (
<<<<<<< HEAD
      <div> App componentaaaa</div>
>>>>>>> build client success !!!
=======
      <div>
        <h1> App component</h1>
        <Login/>
        <button onClick={this.handlingClick.bind(this)} >Click me</button>        
      </div>

>>>>>>>  deploy mern to heroku
    )
  }
}
