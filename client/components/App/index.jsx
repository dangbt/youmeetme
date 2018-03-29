import React, {Component} from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import Login from '../Login/Login.jsx';
import { Button } from 'reactstrap';
=======
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import Login from '../Login/Login.jsx';
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

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
<<<<<<< HEAD
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
  }


  render(){
    return (
      <div>
        <h1> App component</h1>
        <Login/>
<<<<<<< HEAD
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
=======
        <button onClick={this.handlingClick.bind(this)} >Click me</button>        
      </div>

>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
    )
  }
}
