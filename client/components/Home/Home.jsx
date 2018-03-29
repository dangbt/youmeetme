import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ListItem from './ListItem/ListItem.jsx'
import Navigationbar from './Navigationbar/Navigationbar.jsx'
<<<<<<< HEAD
import './Home.scss'
=======
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710

export default class Home extends Component {

  render(){
    return (
<<<<<<< HEAD
      <div className='container'>
        <Sidebar/>
        <div className='content'>
        <Navigationbar/>   
        <ListItem/>
        </div>
=======
      <div>
        <div> Home componentsss</div>
        <Sidebar/>
        <Navigationbar/>
        <ListItem/>
>>>>>>> 08df4ebcee1cdab0bc93c56ca32909d083fd7710
      </div>
    )
  }
}
