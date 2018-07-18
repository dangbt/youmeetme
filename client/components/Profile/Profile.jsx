import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import { _helper } from '../Function/API.js';
import { Form, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import checkAuthenticate from '../Function/checkAuthenticate';
import { Redirect } from 'react-router';
import moment from 'moment';
import BlockUi from 'react-block-ui'
import 'react-block-ui/style.css';
import { Loader, Types } from 'react-loaders';
import Info from './components/Info.js'
import Occupation from './components/Occupation.js';
import Hobby from './components/Hobby.js'
import Notification from '../Notification/index.jsx';
import { AccessAlarm, ThreeDRotation, Accessibility, Edit } from '@material-ui/icons';
import { FlatButton } from 'material-ui';
import { Avatar } from './styled'
import Footer from '../Footer/footer';
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      modal: false,
      nestedModal: false,
      closeAll: false,
      blocking: true,
      user: {},
      info: {},
      occupation: {},
      contact: {},
      hobbies: [],
      avatar: '',
      listhHobbies: [],
      message: '',
      show: false,
      type: 'info',
      isChangePassword: false,
      newPassword: '',
      repeatNewPassword: '',

    }

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

  }
  setTimeOutNotification = () => {
    setTimeout(() => this.setState({ show: false }), 500)
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleChangePassword = () => {
    this.setState({
      isChangePassword: !this.state.isChangePassword
    });
  }
  changePassword = () => {
    const { newPassword, repeatNewPassword } = this.state;
    if ( newPassword === repeatNewPassword) {
      const newUser = { password: newPassword };
      this.updateUser(newUser)
      this.toggleChangePassword();
    }
  }
  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }
  checkAuth = () => {
    checkAuthenticate().then((response) => {
      this.setState({
        authenticate: response.authentication,
        user: response.data
      })
    })

  }
  handleChange = (e) => {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    this.setState({ hobbies: value })
  }
  updateUser = (userUpdate) => {
    const { user } = this.state;

    _helper.fetchAPI(
      '/users/' + user._id,
      userUpdate, [], 'PUT'
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ show: true, message: 'Update successful!', type: 'info' })
        }
        this.setTimeOutNotification();
      })
    setTimeout(() => this.getUser(), 1000);
  }
  showMessage = (msg) => {
    this.setState({ show: true, message: msg, type: 'warning' })
  }

  getUser = () => {
    const { user } = this.state;
    _helper.fetchGET('/users/' + user._id)
      .then((response) => {
        const { info, occupation, contact, hobbies, avatar } = response.data;
        if (response.status == 200) {
          this.setState({
            info,
            occupation,
            contact,
            hobbies,
            avatar
          })
        }
      })
  }

  componentDidMount() {
    this.checkAuth();
    this.getUser();
    setTimeout(() => this.setState({blocking: false}), 3000)
  }

  render() {
    const { authenticate, blocking, user, show, message, type, newPassword, repeatNewPassword } = this.state;
    const { info, occupation, hobbies, contact, avatar } = this.state;

    let xhtml = avatar ? avatar : '../../../assets/default-avatar.png';
    if (!authenticate) {
      return <Redirect to='/login'></Redirect>
    }
    return (
      <div>
        <BlockUi tag="div" blocking={blocking} message="Please wait" keepInView>
          <Sidebar user={user} >
            <Slide />
            <Row>
              <Col xs="2">
                <Avatar src={xhtml} alt='avatar' className='img-thumbnail ' />
                <Nav vertical>
                  <NavItem>
                    <NavLink href="#" style={{fontSize: 16}} onClick={this.toggleChangePassword} >- Change password</NavLink>
                  </NavItem>
                </Nav>
              </Col>
              <Col xs="10">
                <Info info={info} avatar={avatar} updateUser={this.updateUser} showMessage={(msg) => this.showMessage(msg)} />
                <Row>
                  <Col xs="6">
                    <Occupation occupation={occupation} contact={contact} updateUser={this.updateUser} />
                  </Col>
                  <Col xs="6">
                    <Hobby hobbies={hobbies} updateUser={this.updateUser} showMessage={(msg) => this.showMessage(msg)} user={user} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Sidebar>
        </BlockUi>
        <Notification show={show} message={message} type={type} time={2000} />
        <Footer />
        <Modal isOpen={this.state.isChangePassword} >
          <ModalBody>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">New Password</Label>
          <Input type="password" onChange={(e)=> this.setState({newPassword: e.target.value})}  placeholder="Enter password" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Repeat New Password</Label>
          <Input type="password" onChange={(e)=> this.setState({repeatNewPassword: e.target.value})} placeholder="Enter password" />
        </FormGroup>
        </Form>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.changePassword} disabled={ (newPassword !== '' && newPassword === repeatNewPassword) ? false : true }>Save</Button>{' '}
            <Button color="secondary" onClick={this.toggleChangePassword}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>

    )
  }
}

