import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';

import { _helper } from '../../Function/API'
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['info.fullName']

const GroupWrapper = styled(CardGroup) `
justify-content: start;
  
`;
const DidWrapper = styled.div`
  display: flex;
 
 `;
const CardWrapper = styled(Card) `
 width:250px;
 margin: 0 10px;
 flex: auto !important;
`;
const CardImgWrapper = styled(CardImg) `
 height: 250px ;
`;
const ItemFriend = ({ user }) => (
  <CardWrapper>
    <CardImgWrapper src={user.avatar ? user.avatar : '../../../assets/default-avatar.png'} alt="Card image cap" />
    <CardBody>
      <CardTitle>{user.info.fullName}</CardTitle>
      <CardSubtitle>{user.info.fullName}</CardSubtitle>
      <CardText>Thích màu hông ghét sự dối trá</CardText>
    </CardBody>
  </CardWrapper>

);
export default class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',

    }
  }
  
  searchUpdated = (term) => {
    this.setState({ searchTerm: term })
  }
  componentDidMount = () => {
  }


  render() {
    const {  searchTerm } = this.state;
    const { listFriends } = this.props;
    const filteredUser = listFriends.filter(createFilter(searchTerm, KEYS_TO_FILTERS))

    return (
      <div style={{width: '100%'}}  >
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <DidWrapper>
          <GroupWrapper>
            {filteredUser && filteredUser.map((user, i) => {
                return <ItemFriend  user={user} key={user._id} />
            })}
          </GroupWrapper>
        </DidWrapper>
      </div>

    )
  }
}
