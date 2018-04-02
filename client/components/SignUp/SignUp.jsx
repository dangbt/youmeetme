import React, {Component} from 'react';
import {_helper} from '../Function/API.js';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: ''
    }
  }

  handlingSubmit() {
    _helper.fetchAPI(
      '/users/signup',
      {
        username,
        age
      } )
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
        <div> Sign Up componentsss</div>
        <form onSubmit={this.handlingSubmit.bind(this)}>
          <input type='text' placeholder='Enter username' onChange={(username) => {this.setState({username})}}/>
          <input type='password' placeholder='Enter password'  onChange={(password) => {this.setState({password})}}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}
