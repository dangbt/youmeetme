import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: '',
      authenticate: false
    }
  }
  login (e) {
    e.preventDefault();    
    const { username, password } = this.state;
    debugger

    _helper.fetchAPI(
      '/users/login',
      {
        username,
        password
      } )
      .then((response) => {
        const {data, status}  = response;
        console.log(data + status);
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
  render(){
    if(this.state.authenticate) {
      return <Redirect to='/home'></Redirect>
    }
    return (
      <div>
        <div> <h1>Login </h1></div>
        <Form onSubmit={this.login.bind(this)}>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>UserName</Label>
                  <Col sm={10}>
                    <Input type="text"  placeholder="username placeholder" required 
                      onChange={(e) => {
                        this.setState({username: e.target.value})
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input type="password" placeholder="password placeholder" required/>
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
        </Form>
        <Link to='/create-account'>Sign Up</Link>
      </div>
    )
  }
}
