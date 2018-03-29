import React, {Component} from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Nav, NavItem, NavLink } from 'reactstrap';
=======

>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

export default class Sidebar extends Component {

  render(){
    return (
      <div>
<<<<<<< HEAD
        <Nav vertical>
          <NavLink href="#"><Link to='/home'>Home</Link></NavLink>
          <NavLink href="#"><Link to='/chat'>Chat</Link></NavLink> 
          <NavLink href="#"><Link to='/profile'>profile</Link></NavLink>
          <NavLink  href="#"><Link to='/logout'>Log out</Link></NavLink>
        </Nav>     
=======
      <div> Sidebar componentsss</div>
      <Link to='/home'>Home</Link><br></br>
      <Link to='/chat'>Chat</Link><br></br>
      <Link to='/profile'>profile</Link><br></br>
      <Link to='/logout'>Log out</Link>
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
      </div>
    )
  }
}
