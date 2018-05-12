import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';
import './index.scss'

export default class ItemFormChat extends Component {

    render() {
        const {value} = this.props;
        return (
            <div>
                <li className="list-group-item"><img src='../../../../assets/default-avatar.png' alt='avatar' />{value}</li>
            </div>
        )
    }
}
