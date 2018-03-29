import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navigationbar from '../Navigationbar/Navigationbar.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';

export default class NewFriend extends Component {

  render(){
    return (
      <div>
        <div> NewFriend componentsss</div>
        <Navigationbar/>
        <Sidebar/>
      </div>
    )
  }
}
