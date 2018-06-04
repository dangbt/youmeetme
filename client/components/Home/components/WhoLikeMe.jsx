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

const KEYS_TO_FILTERS = ['likeBy.info.fullName']

const GroupWrapper = styled(CardGroup) `
justify-content: start;
  
`;
const DidWrapper = styled.div`
 `;

export default class WhoLikeMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [],
      searchTerm: '',
      _user: {}
     
    }
  }

 
  getListLikeMe = () => {
    _helper.fetchGET(
      '/usersLikeMe', []
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
          this.setState({ listUser: data.data })
        }
      })
  }
 addFriend = (userID) => {
    _helper.fetchAPI(
      '/users/addFriend', { userID: userID }, [], 'POST'
    )
      .then((response) => {
        const { status, data } = response;
        if (status == 200) {
         this.getListLikeMe();
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
    this.getListLikeMe();
    this.checkAuth()
  }
  render() {
    const { listUser, searchTerm, _user } = this.state;
    const  { listLikeMe } = this.props;
    const filteredUser = listLikeMe ?  listLikeMe.filter(createFilter(searchTerm, KEYS_TO_FILTERS)) : [];
    console.log(filteredUser)
    return (
      <div>
        <SearchInput className="search-input" onChange={this.searchUpdated}/>
        <DidWrapper>
          <GroupWrapper>
            {filteredUser && filteredUser.map((user, i) => {
                return <Item addFriend={() => this.props.addFriend(user.userID)} user={user.userID} key={user._id} accept={true} />
            })}
          </GroupWrapper>
        </DidWrapper>
      </div>
    )
  }
}
