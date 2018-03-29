import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navigationbar extends Component {

  render(){
    return (
      <div>
         <Nav>
          <NavLink href="#">Thông báo</NavLink>
          <NavLink href="#">Một nửa</NavLink>
          <NavLink href="#"> <Link to='/newfriend'>Ai mới</Link></NavLink>          
          <NavLink href="#"> Ảnh mới</NavLink>
          <NavLink href="#">Ai thích tôi</NavLink>
        </Nav>
      </div>
    )
  }
}
