import React, {Component} from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Nav, NavItem, NavLink } from 'reactstrap';
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

export default class Navigationbar extends Component {

  render(){
    return (
      <div>
<<<<<<< HEAD
         <Nav>
          <NavLink href="#">Thông báo</NavLink>
          <NavLink href="#">Một nửa</NavLink>
          <NavLink href="#"> <Link to='/newfriend'>Ai mới</Link></NavLink>          
          <NavLink href="#"> Ảnh mới</NavLink>
          <NavLink href="#">Ai thích tôi</NavLink>
        </Nav>
=======
        <div> Navigationbar componentsss</div>
        <h1>Thông báo</h1>
        <h1>Một nửa</h1>
        <Link to='/newfriend'>Ai mới</Link><br></br>
        <h1>Ảnh mới</h1>
        <h1>Ai thích tôi</h1>
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
      </div>
    )
  }
}
