import React, {Component} from 'react';
import { ListGroupItem, Badge  } from 'react-bootstrap';
import './index.scss';
import socketIOClient from 'socket.io-client'

export default class ItemChat extends Component {
    
    render() {
   
        const { user, toggleFormChat} = this.props;
        return (
            <div>
                <ListGroupItem onClick={()=> toggleFormChat(user.name)} className="justify-content-between"><img src='' alt='avatar' /> {user.name}<Badge >14</Badge></ListGroupItem>
                
            </div>
        )
    }
}