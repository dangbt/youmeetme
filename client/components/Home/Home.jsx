import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ListItem from './ListItem/ListItem.jsx';
import TabHome from './TabHome/TabHome.jsx'
import Slide from '../SlideAdvertisement/Slide.jsx'
import './Home.scss'


export default class Home extends Component {

  render(){
    return (
      
      <div className='home-page'>
        <Sidebar/>
        <Slide />
        <TabHome />
      </div>  
    )
  }
}
