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
import {  BorderColor} from '@material-ui/icons'
import { _helper } from '../../Function/API';


export default class Hobby extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            modal: false,
            hobbies: [],
            listHobbies: [],
            content: '',
            valueSelect: [],
            whoLikeThis: {}

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
    getHobby = () => {
        _helper.fetchGET('/hobbies')
            .then((response) => {
                const { status, data } = response;
                if (response.status == 200) {
                    this.setState({
                        listHobbies: data,
                    })


                }
            })

    }
    updateUser = () => {
        const user = {
            hobbies: this.state.valueSelect
        }
        this.props.updateUser(user)
        this.toggleModal();
    }
    componentDidMount() {
        //this.getUser();
        this.getHobby();
    }
    render() {
        const { collapse, modal, } = this.state;
        const { listHobbies, valueSelect } = this.state;
        const { hobbies } = this.props;
        return (
            <div>
                <label onClick={this.toggleCollapse} style={{ fontSize: '3vw' }} className="h1 text-primary btn" id='userHobby' ><u>*User Hobby</u></label>
                <UncontrolledTooltip placement="top" target="userHobby">
                    Click to show
                </UncontrolledTooltip >
                <BorderColor alt='Edit userHobby' onClick={this.toggleModal}  />
                <Collapse isOpen={collapse}>
                    <Row>
                        <Col sx={6}>
                            <Label >Your hobbies: </Label>
                            {
                                hobbies === null ? <Input type='text' value='No data' disabled /> :
                                    hobbies && hobbies.map((item, i) => {
                                        return <Input type="text" placeholder="your hobby" value={(i + 1) + '. ' + item.content}
                                            key={item} disabled />

                                    })
                            }
                        </Col>
                    </Row>
                </Collapse>
                <Modal isOpen={modal} toggle={this.toggleModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleModal} >Edit your hobbies</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label > your hobby</Label>
                            <Input type="select" multiple onChange={(e) => {
                                var options = e.target.options;
                                var value = [];
                                for (var i = 0, l = options.length; i < l; i++) {
                                    if (options[i].selected) {
                                        value.push(options[i].value);
                                    }
                                    this.setState({
                                        valueSelect: value
                                    })
                                }
                            }} >
                                {listHobbies.map((item, i) =>
                                    <option key={item._id} value={item._id} >{i + 1}.{item.content}</option>
                                )
                                }
                            </Input>
                        </FormGroup>
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

