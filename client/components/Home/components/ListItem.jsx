import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from './Item.jsx';
import styled from 'styled-components'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardGroup
} from 'reactstrap';
import { _helper } from '../../Function/API';
import SearchInput, { createFilter } from 'react-search-input';
import checkAuthenticate from '../../Function/checkAuthenticate';
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
      listUser: [],
      searchTerm: '',
      _user: {},
      show: false,
      message: '',
      type: 'info'
     
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
  likeUser = (userID) => {
    _helper.fetchAPI(
      '/likedUsers', { userID: userID }, [], 'POST'
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
          console.log(data);
        }
        this.setState({ show: true, message: data.msg})
        if( status != 200) {
          this.setState({ type: 'warning'})
        }
      })
  }
  checkAuth = () => {
    checkAuthenticate().then((response) => {
      this.setState({
            _user: response.data
      })
      

    })
  }
  searchUpdated = (term) =>  {
    this.setState({ searchTerm: term })
}
  componentDidMount() {
    this.getUser();
    this.checkAuth()
  }
  render() {
    const { listUser, searchTerm, _user, show, message, type } = this.state;
    const filteredUser = listUser.filter(createFilter(searchTerm, KEYS_TO_FILTERS))
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated}/>
        <DidWrapper>
          <GroupWrapper>
            {filteredUser && filteredUser.map((user, i) => {
              if(user._id != _user._id) {
                return <Item likeUser={this.likeUser} user={user} key={user._id} />
              }
              return;
            })}
          </GroupWrapper>
        </DidWrapper>
        <Notification show={show} message={message} type={type}/>
      </div>
    )
  }
}
