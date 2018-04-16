import React, {Component} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {_helper} from '../Function/API.js';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import checkAuthenticate from '../Function/checkAuthenticate.js';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: '',
      authenticate: false,
      message: ''
    }
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
            this.checkAuth();
           
      
          }
          else {
            if (status == 401) {
              this.setState({message: data})
              // this.setState({
              //   showMessage: true,
              //   messagePassword: data,
              //   messageUser: '',
              // })
            }
            else {
              this.setState({message: data})
              // this.setState({
              //   showMessage: true,
              //   messagePassword: '',
              //   messageUser: data,
              // })
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
  checkAuth = () => {
    checkAuthenticate().then((authenticate) => {
      this.setState({
        authenticate: authenticate
      })
    })
  }
  componentDidMount() {
    this.checkAuth();
  }
  render(){
    const {authenticate} = this.state;
    if(authenticate) {
      return <Redirect to='/home'></Redirect>
    }
    return (
      <div>
        <div> <h1>Login </h1></div>
        <Form onSubmit={(e)=> this.login(e)}>
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
                    <Input type="password" placeholder="password placeholder" required 
                      onChange={(e) => {
                        this.setState({password: e.target.value})
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
      </div>
    )
  }
}
