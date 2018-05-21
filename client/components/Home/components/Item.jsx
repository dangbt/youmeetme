import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import styled from 'styled-components'
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

    return (
      <div>
        <CardWrapper>
          <CardImgWrapper src={imgSrc} alt="Card image cap" />
          <CardBody>
            <CardTitle>{user.info.fullName}</CardTitle>
            <CardSubtitle>{user.info.fullName}</CardSubtitle>
            <CardText>Thích màu hông ghét sự dối trá</CardText>
            {
              accept ? ( <Button onClick={() => addFriend(user._id) } >Accept</Button>) : ( <Button onClick={() => likeUser(user._id) } >Like</Button>)
            }
          </CardBody>
        </CardWrapper>
      </div>

    )
  }
}
