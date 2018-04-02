import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {  NavItem, NavLink } from 'reactstrap';
 import Nav from './SidebarContainer'
export default class Sidebar extends Component {

  render(){
    return (
      <div>
        <Nav vertical>
          <NavLink href="#"><Link to='/home'>Home</Link></NavLink>
          <NavLink href="#"><Link to='/chat'>Chat</Link></NavLink> 
          <NavLink href="#"><Link to='/profile'>profile</Link></NavLink>
          <NavLink  href="#"><Link to='/logout'>Log out</Link></NavLink>
        </Nav>     
      </div>
    )
  }
}
