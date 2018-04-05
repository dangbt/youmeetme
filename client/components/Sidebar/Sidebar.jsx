import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Sidebar.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  
  Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    // pass in custom element to use
  }

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      hasScrolled: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleScroll() {
    let hasScrolled = true;
    // Check if it was scrolled back to the top.
    if (document.body.scrollTop <= 20) {
      hasScrolled = false;
    }

    this.setState({ hasScrolled });
  }
  

  componentDidMount() {
    // Listen on scrolling event, call our function.
    window.addEventListener('scroll',  this.handleScroll);
  }

  componentWillUnmount() {
    // Unlisten if the component unmounts.
    window.removeEventListener('scroll', this.handleScroll);
  }
  render(){
    return (
      <div>
        <Navbar color="black"  expand="md"   className={this.state.hasScrolled ? 'onscroll' : null} >
          <NavbarBrand ><Link to='/home'>Home</Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/chat">Chat</Link>
              </NavItem>
              <NavItem>
                <Link to="https://github.com/reactstrap/reactstrap">GitHub</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Username
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link to='/profile'>Profile</Link>
                  </DropdownItem>
                  <DropdownItem>
                    Change Password
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <NavLink href="/login">Log Out</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
