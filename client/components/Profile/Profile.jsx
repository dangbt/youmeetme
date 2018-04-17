import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';
import { _helper } from '../Function/API.js';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label, FormGroup, Input } from 'reactstrap';
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
      hobbies:[],
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
    this.setState({hobbies: value})
    console.log(this.state.hobbies);
  }
  updateUser = () => {
    const { fullName,gender,birthday,height,weight,country,
    knowledge,work,salary,marialStatus,introduce,avatar, hobbies} = this.state;
    _helper.fetchAPI(
      '/users/update',
      {fullName,gender,birthday,height,weight,country,
        knowledge,work,salary,marialStatus,introduce,avatar,hobbies
      },[],'PUT'
    )
    .then((response) => {
      const {data, status} = response;
      console.log(JSON.stringify(data) + status);
    })
  }
  getHobby = () => {
    _helper.fetchGET('/hobbies')
    .then((response) => {
      const { data , status} = response;
      this.setState({listhHobbies: data})
    })

  } 
  getUser = () => {
    _helper.fetchGET('/users')
    .then((response) => {
      const {fullName, gender, birthday, height, weight,country,
        knowledge, work, salary, marialStatus, introduce, avatar, hobbies } = response.data;
      if(response.status == 200) {
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

  render(){
    const {authenticate} = this.state;
    const {fullName, gender, birthday, height, weight,country,
      knowledge, work, salary, marialStatus, introduce, avatar} = this.state;

    let xhtml = avatar ? avatar : '../../../assets/default-avatar.png';
    if(!authenticate) {
      debugger
      return <Redirect to='/login'></Redirect>
    }
    return (
      <div>
        <Sidebar />
        <Slide />
        <Row>
          <Col xs="4">
            <img src={xhtml} alt='avatar' />
            <Button color="danger" onClick={this.toggle}>Edit Profile</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{fullName}</ModalHeader>
              <ModalBody>
                <img src={xhtml} alt='avatar' />
                <FormGroup>
                  <Input type="file" />
                </FormGroup>
                <FormGroup>
                  <Label >Full Name</Label>
                  <Input type="text" placeholder="your fullname" value={fullName}
                    onChange={(e) => {
                      this.setState({ fullName: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Gender</Label>
                  <Input type="text" placeholder="your gender" value={gender}
                    onChange={(e) => {
                      this.setState({ gender: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >DOB</Label>
                  <Input type="date" placeholder="your gender" value={moment(birthday).format('YYYY-MM-DD')}
                    onChange={(e) => {
                      this.setState({ birthday: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Height</Label>
                  <Input type="number" placeholder="your height" value={height}
                    onChange={(e) => {
                      this.setState({ height: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Weight</Label>
                  <Input type="number" placeholder="your weight" value={weight}
                    onChange={(e) => {
                      this.setState({ weight: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Country</Label>
                  <Input type="text" placeholder="your country" value={country}
                    onChange={(e) => {
                      this.setState({ country: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Knowledge</Label>
                  <Input type="text" placeholder="your Knowledge" value={knowledge}
                    onChange={(e) => {
                      this.setState({ knowledge: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Work</Label>
                  <Input type="text" placeholder="your work" value={work}
                    onChange={(e) => {
                      this.setState({ work: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Salary</Label>
                  <Input type="number" placeholder="your salary" value={salary}
                    onChange={(e) => {
                      this.setState({ salary: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Marial Status</Label>
                  <Input type="text" placeholder="your marial status" value={marialStatus}
                    onChange={(e) => {
                      this.setState({ marialStatus: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Introduce</Label>
                  <Input type="text" placeholder="your introduce" value={introduce}
                    onChange={(e) => {
                      this.setState({ introduce: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                  <Label >Select your hobby</Label>
                  <Input type="select" multiple onChange={(e) => this.handleChange(e)} >
                    {this.state.listhHobbies.map((item) =>
                      <option key={item._id} value={item._id} >{item.content}</option>
                    )
                    }
                  </Input>
                </FormGroup>
                <Button color="success"
                  //onClick={this.updateUser}
                  onClick={this.toggleNested}
                >Show Nested Model</Button>
                <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                  <ModalHeader>Nested Modal title</ModalHeader>
                  <ModalBody>Stuff and things</ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                    <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                  </ModalFooter>
                </Modal>
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.updateUser} >Save</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Col>
          <Col xs="8">
            <FormGroup>
              <Label >Full Name: </Label>
              <Input type="text" placeholder="your fullname" value={fullName}
                onChange={(e) => {
                  this.setState({ fullName: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Gender</Label>
              <Input type="text" placeholder="your gender" value={gender}
                onChange={(e) => {
                  this.setState({ gender: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >DOB</Label>
              <Input type="date" placeholder="your gender" value={moment(birthday).format('YYYY-MM-DD')}
                onChange={(e) => {
                  this.setState({ birthday: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Height</Label>
              <Input type="number" placeholder="your height" value={height}
                onChange={(e) => {
                  this.setState({ height: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Weight</Label>
              <Input type="number" placeholder="your weight" value={weight}
                onChange={(e) => {
                  this.setState({ weight: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Country</Label>
              <Input type="text" placeholder="your country" value={country}
                onChange={(e) => {
                  this.setState({ country: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Knowledge</Label>
              <Input type="text" placeholder="your Knowledge" value={knowledge}
                onChange={(e) => {
                  this.setState({ knowledge: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Work</Label>
              <Input type="text" placeholder="your work" value={work}
                onChange={(e) => {
                  this.setState({ work: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Salary</Label>
              <Input type="number" placeholder="your salary" value={salary}
                onChange={(e) => {
                  this.setState({ salary: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label >Marial Status</Label>
              <Input type="text" placeholder="your marial status" value={marialStatus}
                onChange={(e) => {
                  this.setState({ marialStatus: e.target.value })
                }}
                disabled />
            </FormGroup>
            <FormGroup>
              <Label >Introduce</Label>
              <Input type="text" placeholder="your introduce" value={introduce}
                onChange={(e) => {
                  this.setState({ introduce: e.target.value })
                }} disabled />
            </FormGroup>
            <FormGroup>
              <Label > your hobby</Label>
              <Input type="select" multiple disabled>
                {this.state.hobbies.map((item, a) =>
                  <option key={item._id}>{a + 1}.{item._id}</option>
                )
                }
              </Input>
            </FormGroup>
          </Col>
        </Row>
      </div>
      
    )
   
  }
}
