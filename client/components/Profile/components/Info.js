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
    UncontrolledTooltip,
    InputGroup,
    InputGroupAddon
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
    renderInput = (label, props) => {
        if (!props) {
            return (<FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input type='text' value='No data' disabled />
                </InputGroup>
            </FormGroup>)
        }
        return (
            <FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input type='text' value={props} disabled />
                </InputGroup>
            </FormGroup>
        )
    }
    renderInputNumber = (label, props) => {
        if (!props) {
            return (<FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input type='text' value='No data' disabled />
                </InputGroup>
            </FormGroup>)
        }
        return (
            <FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input placeholder="Amount" type="number" step="1" value={props}
                        disabled />
                    <InputGroupAddon addonType="append">{label == 'HEIGHT' ? 'Centimet' : 'Kg'}</InputGroupAddon>
                </InputGroup>
            </FormGroup>
        )
    }
    renderInputBOD = (label, props) => {
        if (!props) {
            return (<FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input type='text' value='No data' disabled />
                </InputGroup>
            </FormGroup>)
        }
        return (
            <FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input type='date' value={moment(props).format('YYYY-MM-DD')} disabled />
                </InputGroup>
            </FormGroup>
        )
    }

    renderInputChange = (label, type, props, onChange) => {
        if (type == 'date') {
            return (
                <FormGroup>
                    <Label >{label}</Label>
                    <InputGroup>
                        <Input type='date' value={moment(props).format('YYYY-MM-DD')} onChange={(e) => onChange(e)} />
                    </InputGroup>
                </FormGroup>)
        }
        if (type == 'number') {
            return (
                <FormGroup>
                    <Label >{label}</Label>
                    <InputGroup>
                        <Input placeholder="number" type="number" step="1" value={props} onChange={(e) => onChange(e)}
                        />
                        <InputGroupAddon addonType="append">{label == 'HEIGHT' ? 'Centimet' : 'Kg'}</InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            )
        }
        return (
            <FormGroup>
                <Label >{label}</Label>
                <InputGroup>
                    <Input type='text' value={props} onChange={(e) => onChange(e)} />
                </InputGroup>
            </FormGroup>
        )

    }
    renderInputChangeSelect = (label, data, props, onChange ) => {
        return (
            <FormGroup>
                <Label>{label}</Label>
                <Input type="select" value={props} onChange={(e) => onChange(e)} >
                    {data.map((item, i) => {
                        return <option key={i}>{item}</option>
                    })}
                </Input>
            </FormGroup>
        )
    }


    componentWillReceiveProps(nextProps) {
        const { info, avatar } = nextProps;
        this.setState({
            fullName: info.fullName,
            gender: info.gender,
            birthday: info.birthday,
            height: info.height,
            weight: info.weight,
            marialStatus: info.marialStatus,
            knowledge: info.knowledge,
            country: info.country,
            avatar: avatar
        })
    }


    render() {
        const { info } = this.props;

        const selectCountry = ['Cà Mau', 'TP.HCM', 'Hà Nội', 'Quãng Ngãi'];
        const genderList = ['Male', 'Female']
        const { collapse, modal } = this.state;
        const { fullName, gender, birthday, height, weight, marialStatus, introduce, knowledge, address, country, avatar } = this.state;
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
                        <Col xs={6} >
                            {info.fullName ? this.renderInput('FULL NAME', info.fullName) : this.renderInput('FULL NAME')}
                            {info.gender ? this.renderInput('GENDER', info.gender) : this.renderInput('GENDER')}
                            {info.birthday ? this.renderInputBOD('BOD', info.birthday) : this.renderInput('BOD')}
                            {info.country ? this.renderInput('COUNTRY', info.country) : this.renderInput('COUNTRY')}
                        </Col>
                        <Col xs={6}>
                            {info.height ? this.renderInputNumber('HEIGHT', info.height) : this.renderInputNumber('HEIGHT')}
                            {info.weight ? this.renderInputNumber('WEIGHT', info.weight) : this.renderInputNumber('WEIGHT')}
                            {info.knowledge ? this.renderInput('KNOWLEDGE', info.knowledge) : this.renderInput('KNOWLEDGE')}
                            {info.marialStatus ? this.renderInput('MARIALSTATUS', info.marialStatus) : this.renderInput('MARIALSTATUS')}
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
                                {this.renderInputChange('FULLNAME', '', fullName, (e) => this.setState({ fullName: e.target.value }))}
                                   {this.renderInputChangeSelect('GENDER',genderList, gender, (e) => this.setState({ gender: e.target.value }) )}
                                {this.renderInputChange('BOD', 'date', birthday, (e) => this.setState({ birthday: e.target.value }))}
                            </Col>
                            <Col xs='6'>
                                {this.renderInputChange('HEIGHT', 'number', height, (e) => this.setState({ height: e.target.value }))}
                                {this.renderInputChange('WEIGHT', 'number', weight, (e) => this.setState({ weight: e.target.value }))}
                                {this.renderInputChangeSelect('COUNTRY',selectCountry, country,  (e) => this.setState({ gender: e.target.value }))}
                                {this.renderInputChange('KNOWLEDGE', '', knowledge, (e) => this.setState({ knowledge: e.target.value }))}
                                {this.renderInputChange('MARIALSTATUS', '', marialStatus, (e) => this.setState({ marialStatus: e.target.value }))}
                            </Col>
                        </Row>
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

