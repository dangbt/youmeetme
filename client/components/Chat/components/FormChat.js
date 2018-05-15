import React, { Component } from 'react';
import { Button, Form, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import ItemFormChat from './ItemFormChat';
import socketIOClient from 'socket.io-client';
import socket from '../socket'
import './index.scss';

export default class FormChat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            client: socket(),
        }
    }
    submitMessage = (e) => {
        const { message, client } = this.state;
        e.preventDefault();
        if(!message) {
            return;
        }
        this.setState({message: ''})
        return client.message( message)        
    }

    render() {
        const { endpoint, message,  } = this.state;
           const { open } = this.props;
        if (open) {
            return (
                <div className='form-chat'>
                    <ul className="list-group">
                        
                    </ul>
                    <Form onSubmit={(e) => this.submitMessage(e)} >
                        <InputGroup>
                            <Input onChange={(e) => {
                                this.setState({ message: e.target.value })
                            }} value={message} />
                            <InputGroupAddon addonType="append">
                                <Button color="secondary">Send</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>

                </div>
            )
        }
        return (
            <div className='form-chat'>
                <Form onSubmit={(e) => this.submitMessage(e)}>
                    <InputGroup>
                        <Input onChange={(e) => {
                            this.setState({ message: e.target.value })
                        }} value={message} />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary">Send</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
            </div>
        )
    }
}
