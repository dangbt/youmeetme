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
    InputGroupAddon,
    InputGroup,
    UncontrolledTooltip ,
} from 'reactstrap';
import { _helper } from '../../Function/API';
export default class Occupation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            modal: false,
            occupation: {},
            work: 'your work',
            salary: 0,
            contact: {},
            email: '',
            phone: '',
            web_page: '',
        }
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
    updateUser = () => {
        const user = {
            occupation: {
                work: this.state.work,
                salary: this.state.salary,
            },
            contact: {
                email: this.state.email,
                phone: this.state.phone,
                web_page: this.state.web_page,

            }
        }
        this.props.updateUser(user)
        this.toggleModal();
    }
    componentWillReceiveProps() {
        const {occupation,contact} = this.props;
        this.setState({
           work: occupation.work,
           salary: occupation.salary,
           email: contact.email,
           phone: contact.phone,
           web_page: contact.web_page
        })   
        
    }

    render() {
        const {occupation,contact} = this.props;
        const { collapse, modal, } = this.state;
        const { work, salary, email, phone, web_page } = this.state;
        return (
            <div>
                <label onClick={this.toggleCollapse} style={{fontSize: '3vw'}} className="h1 text-primary btn" id='userOccupation'><u>*User Occupation</u></label>
                <UncontrolledTooltip  placement="top" target="userOccupation">
                    Click to show
                </UncontrolledTooltip >
                <img src='' alt='Edit userOccupation' onClick={this.toggleModal} />
                <Collapse isOpen={collapse}>
                    <FormGroup>
                        <Label >Work </Label>
                        <Input type="text" placeholder='Enter your work' value={occupation.work}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label >Salary</Label>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                            <Input placeholder="Amount" type="number" step="1" value={occupation.salary} disabled />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <Label >Email</Label>
                        <Input type="text" placeholder='Enter your email' value={contact.email}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label >Phone</Label>
                        <Input type="text" placeholder='Enter your phone' value={contact.phone}
                            disabled />
                    </FormGroup>
                    <FormGroup>
                        <Label >Web_Page</Label>
                        <Input type="text" placeholder='Enter your web_page' value={contact.web_page}
                            disabled />
                    </FormGroup>
                </Collapse>
                <Modal isOpen={modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal} >User Occupation</ModalHeader>
                    <ModalBody>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label >Work: </Label>
                                    <Input type="text" placeholder="your fullname" value={work}
                                        onChange={(e) => {
                                            this.setState({ work: e.target.value })
                                        }}
                                    />
                                </FormGroup>

                                <FormGroup>
                                    <Label >Salary:</Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                                        <Input placeholder="Amount" type="number" step="1" value={salary}
                                            onChange={(e) => {
                                                this.setState({ salary: e.target.value })
                                            }} />
                                        <InputGroupAddon addonType="append">.00</InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                            </Col>
                            <Col sx={6} >
                                <FormGroup>
                                    <Label >Email</Label>
                                    <Input type="email" placeholder='Enter your email' value={email}
                                     onChange={(e) => {
                                        this.setState({ email: e.target.value })
                                    }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Phone</Label>
                                    <Input type="text" placeholder='Enter your phone' value={phone}
                                       onChange={(e) => {
                                        this.setState({ phone: e.target.value })
                                    }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label >Web_Page</Label>
                                    <Input type="text" placeholder='Enter your web_page' value={web_page}
                                       onChange={(e) => {
                                        this.setState({ web_page: e.target.value })
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








