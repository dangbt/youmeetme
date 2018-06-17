import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';
import { Message } from '@material-ui/icons'
import moment from 'moment';
const GroupWrapper = styled(CardGroup) `
    justify-content: start;
  
`;
const DidWrapper = styled.div`
     display: flex;
 
 `;
const CardWrapper = styled(Card) `
    max-width: 250px;
    width:250px;
    margin: 0 10px;
    flex: auto !important;
`;
const CardImgWrapper = styled(CardImg) `
    height: 250px ;
`;
export const ItemFriend = ({ friend, joinRoom }) => (
    <CardWrapper>
      <CardImgWrapper src={friend.avatar ? friend.avatar : '../../../assets/default-avatar.png'} alt="Card image cap" />
      <CardBody>
        <CardTitle>Name : {friend.info.fullName}</CardTitle>
        <CardSubtitle>City : {friend.info.address}</CardSubtitle>
        <CardText>Birthday : {friend.info.birthday ? moment(friend.info.birthday).format('MMM Do YY') : 'MM DD YY' }</CardText>
        <CardText>{friend.info.introduce ? friend.info.introduce : 'Friendly and like make friend' }</CardText>
        <Button outline  color='info' onClick={() => joinRoom(friend._id)} ><Message/></Button>
      </CardBody>
    </CardWrapper>
  
  );