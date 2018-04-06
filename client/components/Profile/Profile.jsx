import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Slide from '../SlideAdvertisement/Slide.jsx';

export default class Profile extends Component {

  render(){
    return (
      <div>
      <Sidebar/>
      <Slide/>
      </div>
    )
  }
}
