import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import checkAuthenticate from '../Function/checkAuthenticate.js';
import Notification from '../Notification/index.jsx';
import './Login.scss'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: '',
      authenticate: false,
      message: '',
      show: false,
      type: 'info'
      
    }
  }
  setTimeOutNotification = () => {
    setTimeout( ()=> this.setState({show: false}), 500)
  }

  login= (e)=> {
    e.preventDefault();
    const { username, password } = this.state;
    _helper.fetchAPI(
      '/login',
      {
        username,
        password
      } )
      .then((response) => {
        if (response) {
          const { data, status } = response;
          if (status == 200) {
            console.log(data)
            this.checkAuth();
          }
          else {
            if (status == 401) {
              this.setState({show: true, message: data, type: 'warning'})
             
              // this.setState({
              //   showMessage: true,
              //   messagePassword: data,
              //   messageUser: '',
              // })
            }
            else {
              this.setState({show: true, message: data, type: 'error'})
              // this.setState({
              //   showMessage: true,
              //   messagePassword: '',
              //   messageUser: data,
              // })
            }
          }
          this.setTimeOutNotification();          
        }
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
  checkAuth = () => {
    checkAuthenticate()
    .then((authenticate) => {
      this.setState({
        authenticate: authenticate
      })
    })
  }
  componentDidMount() {
    this.checkAuth();
  }
  render(){
    const {authenticate, show, message, type} = this.state;
    if(authenticate) {
      return <Redirect to='/home'></Redirect>
    }
    return (
      <div className='login-page' >
        <div> <h1>Login </h1></div>
        <Form onSubmit={(e)=> this.login(e)}>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>UserName</Label>
                  <Col sm={10}>
                    <Input type="text"  placeholder="username placeholder" required 
                      onChange={(e) => {
                        this.setState({username: e.target.value, show: false})
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input type="password" placeholder="password placeholder" required 
                      onChange={(e) => {
                        this.setState({password: e.target.value, show: false})
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
        </Form>
        <Link to='/create-account'>Sign Up</Link>
        <Notification show={show} message={message} type={type} time={2000} />
      </div>
    )
  }
}
