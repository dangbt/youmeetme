import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Navigationbar from '../Navigationbar/Navigationbar.jsx';
import Sidebar from '../../Sidebar/Sidebar.jsx';
import './NewFriend.scss'

export default class NewFriend extends Component {

  render(){
    return (
      <div className='newfriend-page'>
        <Sidebar/>
        <div className='content'>
          <Navigationbar/>   
          <h1> Content</h1>
        </div>
      </div>
    )
  }
}
