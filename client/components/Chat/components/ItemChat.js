import React, {Component} from 'react';
import { ListGroupItem, Badge  } from 'react-bootstrap';
import './index.scss';
import socketIOClient from 'socket.io-client'

export default class ItemChat extends Component {
    
    render() {
   
        const { friend, toggleFormChat} = this.props;
        return (
            <div>
                <ListGroupItem onClick={()=> toggleFormChat(friend._id)} className="justify-content-between"><img src='' alt='avatar' /> {friend._id}<Badge >14</Badge></ListGroupItem>
                
            </div>
        )
    }
}