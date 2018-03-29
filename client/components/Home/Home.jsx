import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar.jsx';
import ListItem from './ListItem/ListItem.jsx'
import Navigationbar from './Navigationbar/Navigationbar.jsx'

export default class Home extends Component {

  render(){
    return (
      <div>
        <div> Home componentsss</div>
        <Sidebar/>
        <Navigationbar/>
        <ListItem/>
      </div>
    )
  }
}
