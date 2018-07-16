import React, { Component } from 'react';
import styled from 'styled-components'
import SearchInput, { createFilter } from 'react-search-input';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  CardGroup
} from 'reactstrap';
import Item from './Item.jsx';
import { _helper } from '../../Function/API';
import Notification from '../../Notification/index.jsx';

const KEYS_TO_FILTERS = ['info.fullName']

const GroupWrapper = styled(CardGroup) `
  justify-content: start;
  
`;
const DidWrapper = styled.div`
 `;
 const BtnLoadMore = styled(Button)`
  width: 200px;
  margin-top: 20px;
 `;

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      limit: 8,
      hasMore: true,
    }
  }

  likeUser = (userID) => {
    _helper.fetchAPI(
      '/likedUsers', { userID: userID }, [], 'POST'
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
          this.props.handleShowNotification(data.msg, 'info')
        }
        if (status != 200) {
          this.props.handleShowNotification(data.msg, 'warning')
        }
      })
  }
  loadMore = () => {
    this.setState({ limit: this.state.limit + 8 })
  }

  searchUpdated = (term) => {
    this.setState({ searchTerm: term })
  }
  render() {
    const { searchTerm, limit, hasMore } = this.state;
    const { listUser, user } = this.props;
    const filteredUser = listUser.filter(createFilter(searchTerm, KEYS_TO_FILTERS));

    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated} />
        <DidWrapper>
          <GroupWrapper>
            {filteredUser && filteredUser.slice(0, limit).map((item, i) => {
              if (item._id != user._id) {
                return <Item likeUser={this.likeUser} user={item} key={item._id} />
              }
              return;
            })}
          </GroupWrapper>
          {
            limit >= listUser.length - 1 ?
              <div></div>
              :
              <div style={{textAlign: 'center'}}><BtnLoadMore color='warning' onClick={this.loadMore}>Load More</BtnLoadMore></div>
          }
        </DidWrapper>
      </div>
    )
  }
}
