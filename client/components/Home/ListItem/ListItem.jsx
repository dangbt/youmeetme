import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item.jsx';
import styled from 'styled-components'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';
import { _helper } from '../../Function/API'

const GroupWrapper = styled(CardGroup) `
justify-content: start;
  
`;
const DidWrapper = styled.div `
 `;

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: []
    }
  }

  getUser = () => {
    _helper.fetchGET(
      '/users', []
    )
      .then((response) => {
        const { data, status } = response;
        if (status == 200) {
          this.setState({ listUser: data })
        }
      })

  }
  addFriend = (userID) => {
    _helper.fetchAPI(
      '/users/addFriend', {userID :userID  },[], 'POST'
    )
    .then((response) => {
      const { status, data } = response;
      debugger
      if( status == 200 ) {
        console.log( data );
      } 
    })
  }
  componentDidMount() {
    this.getUser();
  }
  render() {
    const { listUser } = this.state;
    const lenghtUser = listUser.length;
    console.log(lenghtUser)
    return (
      <DidWrapper>
        <GroupWrapper>
        { listUser && listUser.map((user, i) => {
          return <Item addFriend={this.addFriend} user={user} key={user._id} />
        })}
        </GroupWrapper>
      </DidWrapper>
    )
  }
}
