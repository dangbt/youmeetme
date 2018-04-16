import React, {Component} from 'react';
import { Link,Redirect } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import checkAuthenticate from '../Function/checkAuthenticate'

export default class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      authenticate: true
    }
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
  render() {
    const {authenticate} = this.state;
    if (!authenticate) {
      return (
        <Redirect to={'/login'}></Redirect>
      )
    }
    return (
      <div>
        <Sidebar />
        <Slide />
      </div>
    )
  }
}
