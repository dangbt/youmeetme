import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';
import { _helper } from '../../../Function/API'



export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

 
  
  render() {
    
    return (
        <div>
            <input type='text' placeholder='Enter value'/>
        </div>
     
    )
  }
}
