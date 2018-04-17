import React, {Component} from 'react';
import {_helper} from '../Function/API.js';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: '',
      fullName: '',
      hobies:[],
      authenticate: false
    }
  }
  signup = (e) => {
    e.preventDefault();
  const {username, password, fullName} = this.state;
    _helper.fetchAPI(
      '/signup',
      {
        username,
        password,
        fullName,

      } )
      .then((response) => {
        this.setState({user: response});
        console.log(this.state.user);
        this.setState({authenticate: true})
      })
      .catch((error) => {
        console.log(error);
      })


  }


  render(){
    if(this.state.authenticate) {
     return <Redirect to='login'></Redirect>
    } 
          return (
            <div>
              <h1  > Sign Up </h1>
              <Form onSubmit={this.signup}>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>UserName</Label>
                  <Col sm={10}>
                    <Input type="text" name="username"  placeholder="username placeholder" required 
                    onChange={(e) => {
                      this.setState({username: e.target.value})
                    }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input type="password" name="password" placeholder="password placeholder" required 
                      onChange={(e) => {
                        this.setState({password: e.target.value})
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>FullName</Label>
                  <Col sm={10}>
                    <Input type="text" name="fullname"  placeholder="fullname placeholder" required 
                      onChange={(e) => {
                        this.setState({fullName: e.target.value})
                      }}
                    />
                  </Col>
                </FormGroup>  
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email"  placeholder="email placeholder" />
                  </Col>
                </FormGroup>  
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Address</Label>
                  <Col sm={10}>
                    <Input type="text" name="address"  placeholder="address placeholder" />
                  </Col>
                </FormGroup>     
                <FormGroup check row>
                  <Col sm={{ size: 10, offset: 2 }}>
                    <Button>Submit</Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          ) 
  }
}
