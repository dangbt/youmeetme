import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item.jsx';

export default class ListItem extends Component {

  render(){
    return (
      <div>
        <div> ListItem componentsss</div>
        <Item/>
      </div>
    )
  }
}
