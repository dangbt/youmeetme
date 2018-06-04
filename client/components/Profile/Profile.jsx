import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import { _helper } from '../Function/API.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import checkAuthenticate from '../Function/checkAuthenticate';
import { Redirect } from 'react-router';
import moment from 'moment';
import BlockUi from 'react-block-ui'
import { Loader, Types } from 'react-loaders';
import Info from './components/Info.js'
import Occupation from './components/Occupation.js';
import Hobby from './components/Hobby.js'
import Notification from '../Notification/index.jsx';
import { AccessAlarm, ThreeDRotation, Accessibility, Edit } from '@material-ui/icons';
import { FlatButton } from 'material-ui';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: true,
      modal: false,
      nestedModal: false,
      closeAll: false,
      blocking: false,
      user: {},
      info: {},
      occupation: {},
      contact: {},
      hobbies: [],
      avatar: '',
      listhHobbies: [],
      message: '',
      show: false,
      type: 'info'
    }

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

  }
  setTimeOutNotification = () => {
    setTimeout( ()=> this.setState({show: false}), 1000)
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
      '/users/' +  user._id ,
      userUpdate , [], 'PUT'
    )
      .then((response) => {
        const { data, status } = response;
        debugger
        if(status == 200) {
          this.setState({show: true, message: 'Update success !!', type: 'info'})
        }
        if( status == 413) {
          this.setState({show: true, message: 'Kích thước hình ảnh quá lớn. Chỉ được upload hình nhỏ hơn 5M !!', type: 'warrning'})
        }
        // this.setTimeOutNotification();        
      })
    
      this.setState({show: false})
      this.getUser();
  }
  getHobby = () => {
    _helper.fetchGET('/hobbies')
      .then((response) => {
        const { data, status } = response;
        this.setState({ listhHobbies: data })
      })

  }
  getUser = () => {
    const { user } = this.state;
    _helper.fetchGET('/users/'+ user._id )
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
    //this.getHobby();
    this.getUser();
    this.checkAuth();
  }

  render() {
    const { authenticate, blocking, user,  show, message, type } = this.state;
    const { info, occupation, hobbies, contact, avatar } = this.state;
   
    let xhtml = avatar ? avatar : '../../../assets/default-avatar.png';
    if (!authenticate) {
      return <Redirect to='/login'></Redirect>
    }
    return (
      <div>
        <BlockUi tag="div" blocking={blocking} loader={<Loader active type='line-scale' color="#02a17c" />} message="Please wait" keepInView>
          <Sidebar  user={user} >
          <Slide />
          <Row>
            <Col xs="4">
              <img src={xhtml} alt='avatar' className='img-thumbnail  w-100' />
            </Col>
            <Col xs="8">
              <Info info={info} avatar={avatar} updateUser={this.updateUser} />
              <Occupation occupation={occupation} contact={contact} updateUser={this.updateUser} />
              <Hobby hobbies={hobbies} updateUser={this.updateUser} />
            </Col>
          </Row>
          </Sidebar>
        </BlockUi>
        <Notification show={show} message={message} type={type} time={2000} />
        <footer style={{ height: '100px' }}></footer>
      </div>

    )
  }
}

