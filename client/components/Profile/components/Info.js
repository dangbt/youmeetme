import React, { Component } from 'react';
import moment from 'moment';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    FormGroup,
    Input,
    Collapse,
    Col,
    Row,
    UncontrolledTooltip
} from 'reactstrap';
import { _helper } from '../../Function/API';


export default class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: true,
            modal: false,
            info: this.props.info,
            fullName: '',
            gender: '',
            height: '',
            weight: 0,
            marialStatus: '',
            knowledge: '',
            country: '',
            avatar: ''

        }
    }
    handleChangeSelect = (e) => {
        this.setState({ country: e.target.value })

    }
    toggleCollapse = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }
    toggleModal = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleChangeImage = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                avatar: reader.result
            });
        }

        reader.readAsDataURL(file)
    }
    updateUser = () => {
        const user = {
            info: {
                fullName: this.state.fullName,
                gender: this.state.gender,
                birthday: this.state.birthday,
                height: this.state.height,
                weight: this.state.weight,
                marialStatus: this.state.marialStatus,
                knowledge: this.state.knowledge,
                country: this.state.country,
            },
            avatar: this.state.avatar
        }
        this.props.updateUser(user);
        this.toggleModal();
    }

    componentWillReceiveProps(nextProps) {
        const {info,avatar} = nextProps;
        this.setState({
            fullName: info.fullName,
            gender:info.gender,
            birthday: info.birthday,
            height: info.height,
            weight: info.weight,
            marialStatus:info.marialStatus,
            knowledge: info.knowledge,
            country: info.country,
            avatar: avatar
        })   
    }


    render() {
        const { info } = this.props;
        
        const selectCountry = ['Cà Mau', 'TP.HCM', 'Hà Nội', 'Quãng Ngãi'];
        const { collapse, modal } = this.state;
        const { fullName, gender, birthday, height, weight, marialStatus, introduce, knowledge, address, country, avatar } = this.state;
        console.log(fullName)
        let xhtml = avatar ? avatar : '../../../../assets/default-avatar.png';
        return (
            <div>
                <label onClick={this.toggleCollapse} style={{ fontSize: '3vw' }} className="h1 text-primary font-size btn" id='userInfo' ><u >*User Info</u></label>
                <UncontrolledTooltip placement="top" target="userInfo">
                    Click to show
                </UncontrolledTooltip >
                <img src='' alt='Edit userInfo' onClick={this.toggleModal} />

                <Collapse isOpen={collapse}>
                    <Row>
                        <Col sx={6}>
                            <FormGroup>
                                <Label >Full Name: </Label>
                                <Input type="text" placeholder="your fullname" value={info.fullName ? info.fullName : ''}
                                    disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label >Gender</Label>
                                <Input type="text" placeholder="your gender" value={info.gender}
                                    disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label >DOB</Label>
                                <Input type="date" placeholder="your gender" value={moment(info.birthday).format('YYYY-MM-DD')}
                                    disabled />
                            </FormGroup>

                            <FormGroup>
                                <Label >Country</Label>
                                <Input type="text" placeholder="your country" value={info.country}
                                    disabled />
                            </FormGroup>
                        </Col>
                        <Col sx={6} >
                            <FormGroup>
                                <Label >Height</Label>
                                <Input type="text" placeholder="your height" value={info.height}
                                    disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label >Weight</Label>
                                <Input type="text" placeholder="your weight" value={info.weight + 'KG'}
                                    disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label >Knowledge</Label>
                                <Input type="text" placeholder="your Knowledge" value={info.knowledge}
                                    disabled />
                            </FormGroup>
                            <FormGroup>
                                <Label >Marial Status</Label>
                                <Input type="text" placeholder="your marial status" value={info.marialStatus}
                                    disabled />
                            </FormGroup>
                        </Col>
                    </Row>
                </Collapse>
                <Modal isOpen={modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal} >{fullName}</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="6">
                                <img src={xhtml} alt='avatar' className='img-thumbnail' />
                                <input type='file' onChange={(e) => this.handleChangeImage(e)} />
                                <FormGroup>
                                    <Label >Full Name: </Label>
                                    <Input type="text" placeholder="your fullname" value={fullName}
                                        onChange={(e) => {
                                            this.setState({ fullName: e.target.value })
                                        }}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label >Gender</Label>
                                    <Input type="text" placeholder="your gender" value={gender}
                                        onChange={(e) => {
                                            this.setState({ gender: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label >DOB</Label>
                                    <Input type="date" placeholder="your gender" value={moment(birthday).format('YYYY-MM-DD')}
                                        onChange={(e) => {
                                            this.setState({ birthday: e.target.value })
                                        }}
                                    />
                                </FormGroup>


                            </Col>
                            <Col xs='6'>
                                <FormGroup>
                                    <Label >Height</Label>
                                    <Input type="text" placeholder="your height" value={height}
                                        onChange={(e) => {
                                            this.setState({ height: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Weight: (Kg)</Label>
                                    <Input type="number" placeholder="your weight" value={weight}
                                        onChange={(e) => {
                                            this.setState({ weight: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Country</Label>
                                    <Input type="select" value={country} onChange={(e) => this.handleChangeSelect(e)} >
                                        {selectCountry.map((country, i) => {
                                            return <option key={i}>{country}</option>
                                        })}
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label >Knowledge</Label>
                                    <Input type="text" placeholder="your Knowledge" value={knowledge}
                                        onChange={(e) => {
                                            this.setState({ knowledge: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Marial Status</Label>
                                    <Input type="text" placeholder="your marial status" value={marialStatus}
                                        onChange={(e) => {
                                            this.setState({ marialStatus: e.target.value })
                                        }}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
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
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

