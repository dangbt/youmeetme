import React, { Component } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default class Notification extends Component {
    createNotification = (message, type) => {
        if(!message) message = '';
        if (type == 'info' || type == null) {
            return NotificationManager.info(message,'', 5000);
        }
        if (type == 'success') {
            return NotificationManager.success(message,'', 5000);
        }
        if (type == 'warning') {
            return NotificationManager.warning(message,'', 5000);
        }
        if (type == 'error') {
            return NotificationManager.error(message,'', 5000);
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
        const { show, message, type } = this.props;
        return (
            <div>
                {show ? this.createNotification(message, type) : <div></div>}
                <NotificationContainer />
            </div>
        )
    }
}