import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends Component {

  render(){
    return (
      <div>
      <div> Sidebar componentsss</div>
      <Link to='/home'>Home</Link><br></br>
      <Link to='/chat'>Chat</Link><br></br>
      <Link to='/profile'>profile</Link><br></br>
      <Link to='/logout'>Log out</Link>
      </div>
    )
  }
}
