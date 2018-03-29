import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {Button} from 'react-bootstrap';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: '',
      checkAuth: false
    }
  }

  handlingSubmit(e) {
    e.preventDefault();
    this.setState({checkAuth: !this.state.checkAuth})
    console.log('Log in success !!!');
  }
  handlingChange(e) {
    console.log(e.target.value);
    this.setState({username: e.target.value});

  }

  render(){
    if(this.state.checkAuth) {
      return <Redirect to='/home'></Redirect>
    }
    return (
      <div>
        <div> <h1>Login </h1></div>
        <form onSubmit={this.handlingSubmit.bind(this)}>
          <input type='text' placeholder='Enter username'
          onChange={this.handlingChange.bind(this)}/>

          <input type='password' placeholder='Enter password'
          onChange={(password) => {this.setState({password})}}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}
