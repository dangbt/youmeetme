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



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false,
      hobbies: [],
      listhHobbies: [],
      authenticate: true,
      username: '',
      password: '',
      fullName: '',
      gender: '',
      birthday: '',
      height: 0,
      weight: 0,
      country: '',
      knowledge: '',
      work: '',
      salary: '',
      marialStatus: '',
      introduce: '',
      avatar: '',
    }

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

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
    checkAuthenticate().then((authenticate) => {
      this.setState({
        authenticate: authenticate
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
    console.log(this.state.hobbies);
  }
  updateUser = () => {
    const { fullName, gender, birthday, height, weight, country,
      knowledge, work, salary, marialStatus, introduce, avatar, hobbies } = this.state;
  }
  updateUser = (user) => {
    const userId = '5ada15893641188b507d3e8c';
    //  const userId = '5ad5714687ec4927f8a0df26';
    _helper.fetchAPI(
      '/users/update',
      {
        fullName, gender, birthday, height, weight, country,
        knowledge, work, salary, marialStatus, introduce, avatar, hobbies
      }, [], 'PUT'
    )
      .then((response) => {
        const { data, status } = response;
        console.log(JSON.stringify(data) + status);
      })
  }
  getHobby = () => {
    _helper.fetchGET('/hobbies')
      .then((response) => {
        const { data, status } = response;
        this.setState({ listhHobbies: data })
      })

  }
  getUser = () => {
    _helper.fetchGET('/users')
      .then((response) => {
        const { fullName, gender, birthday, height, weight, country,
          knowledge, work, salary, marialStatus, introduce, avatar, hobbies } = response.data;
        if (response.status == 200) {
          this.setState({
            fullName,
            gender,
            birthday: moment(birthday).format('YYYY-MM-DD'),
            height,
            weight,
            country,
            knowledge,
            work,
            salary,
            marialStatus,
            introduce,
            avatar,
            hobbies
          })
          debugger
        }
      })

  }
  componentDidMount() {
    this.getHobby();
    this.checkAuth();
    this.getUser();

  }

  render() {
    const { authenticate } = this.state;
    const { fullName, gender, birthday, height, weight, country,
      knowledge, work, salary, marialStatus, introduce, avatar } = this.state;
    let xhtml = avatar ? avatar : '../../../assets/default-avatar.png';
    if (!authenticate) {
      debugger
      return <Redirect to='/login'></Redirect>
    }
    return (
      <div>
        <BlockUi tag="div" blocking={blocking} loader={<Loader active type='line-scale' color="#02a17c" />} message="Please wait" keepInView>
          <Sidebar />
          <Slide />
          <Row>
            <Col xs="4">
              <img src={xhtml} alt='avatar' />
              <Button color="danger" onClick={this.toggle}>Edit Profile</Button>
            </Col>
            <Col xs="9">
              <Info info={info} avatar={avatar} updateUser={this.updateUser} />
              <Occupation occupation={occupation} contact={contact} updateUser={this.updateUser} />
              <Hobby hobbies={hobbies} updateUser={this.updateUser} />
            </Col>
          </Row>
        </BlockUi>
      </div>

    )
  }
}

