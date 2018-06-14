import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import styled from 'styled-components'
import { ThumbUp } from '@material-ui/icons'

const CardWrapper = styled(Card) `
  width:250px;
  margin: 0 10px;
`;
const CardImgWrapper = styled(CardImg)`
  height: 250px ;
`;

export default class Item extends Component {

  render() {
    const { user, likeUser, accept, addFriend } = this.props;
    var imgSrc = user.avatar ? user.avatar : "../../../assets/default-avatar.png";
    console.log(user.info.birthday);
    return (
      <div>
        <CardWrapper>
          <CardImgWrapper src={imgSrc} alt="Card image cap" />
          <CardBody>
            <CardTitle>Name : {user.info.fullName}</CardTitle>
            <CardSubtitle>City : {user.info.address}</CardSubtitle>
            <CardText>Birthday : {user.info.birthday ? moment(user.info.birthday).format('MMM Do YY') : 'MM DD YY' }</CardText>
            <CardText>{user.info.introduce ? user.info.introduce : 'Friendly and like make friend' }</CardText>
            
            {
              accept ? ( <Button onClick={() => addFriend()} >Accept</Button>) : ( <Button outline  color='info' onClick={() => likeUser(user._id) } > <ThumbUp color='primary' /></Button>)
            }
          </CardBody>
        </CardWrapper>
      </div>

    )
  }
}
