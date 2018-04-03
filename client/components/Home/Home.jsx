import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ListItem from './ListItem/ListItem.jsx'
import './Home.scss'

export default class Home extends Component {

  render(){
    return (
      <div className='home-page'>
        <Sidebar/>
        <div className='content'>  
          <ListItem/>
        </div>
      </div>
    )
  }
}
