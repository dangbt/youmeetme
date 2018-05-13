import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';
import styled from 'styled-components'
const CardWrapper = styled(Card) `
  border: none !important;
  width:280px;
  height:350px;
  margin: 0 20px;
`;
const CardImgWrapper = styled(CardImg)`
  height: 250px ;
`;

export default class Item extends Component {

  render() {
    const { user } = this.props;
    var imgSrc = user.avatar ? user.avatar : "../../../../assets/default-avatar.png";
    return (
      <div>
        <CardWrapper>
          <CardImgWrapper src={imgSrc} alt="Card image cap" />
          <CardBody>
            <CardTitle>{user._id}</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </CardWrapper>
      </div>

    )
  }
}
