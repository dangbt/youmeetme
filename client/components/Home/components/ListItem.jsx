import React, { Component } from 'react';
import Item from './Item.jsx';
import styled from 'styled-components'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';
import { _helper } from '../../Function/API';
import SearchInput, { createFilter } from 'react-search-input';
import Notification from '../../Notification/index.jsx';

const KEYS_TO_FILTERS = ['info.fullName']

const GroupWrapper = styled(CardGroup) `
justify-content: start;
  
`;
const DidWrapper = styled.div`
 `;

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    }
  }

  likeUser = (userID) => {
    _helper.fetchAPI(
      '/likedUsers', { userID: userID }, [], 'POST'
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
          this.props.handleShowNotification(data.msg,'info')
        }
        if( status != 200) {
          this.props.handleShowNotification(data.msg,'warning')
        }
      })
  }

  searchUpdated = (term) =>  {
    this.setState({ searchTerm: term})
}
  render() {
    const {  searchTerm } = this.state;
    const { listUser, user } = this.props;
    const filteredUser = listUser.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated}/>
        <DidWrapper>
          <GroupWrapper>
            {filteredUser && filteredUser.map((item, i) => {
              if(item._id != user._id) {
                return <Item likeUser={this.likeUser} user={item} key={item._id} />
              }
              return;
            })}
          </GroupWrapper>
        </DidWrapper>
      </div>
    )
  }
}
