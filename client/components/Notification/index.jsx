import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class Notification extends Component {
    createNotification = (message, type, time) => {
        if(!message) message = '';
        
        if (type == 'info' || type == null) {
            return NotificationManager.info(message,'', time ? time : 3000);
        }
        if (type == 'success') {
            return NotificationManager.success(message,'', time ? time : 3000);
        }
        if (type == 'warning') {
            return NotificationManager.warning(message,'', time ? time : 3000);
        }
        if (type == 'error') {
            return NotificationManager.error(message,'', time ? time : 3000);
        }
    }
    // createNotification = (message, type) => {
    //     return () => {
    //       switch (type) {
    //         case 'info':
    //         // message , title , time, cb
    //           NotificationManager.info(message, '',5000);
    //           break;
    //         case 'success':
    //           NotificationManager.success(message, '',5000 );
    //           break;
    //         case 'warning':
    //           NotificationManager.warning(message, '',  5000);
    //           break;
    //         case 'error':
    //           NotificationManager.error(message, '',  5000);
    //           break;
    //       }
    //     };
    //   };

    render() {
        const { show, message, type, time } = this.props;
        return (
            <div>
                {show ? this.createNotification(message, type, time) : <div></div>}
                <NotificationContainer />
            </div>
        )
    }
}