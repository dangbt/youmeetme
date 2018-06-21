import React from 'react';
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment'

const ListItemWrapper = styled(ListItem)`
  cursor: pointer;
  border-bottom: 1px solid black;
`;
const AvatarWrapper = styled(Avatar)`
  width: 60px !important;
  height: 60px !important;
`;
const ListItemTextWrapper = styled(ListItemText)`
  h3, p {
    font-size: 20px !important;
  }
  &:hover {
    text-decoration: none;
  }
`;

const getCardTitleStyle = () => ({
  display: 'flex',
  alignItems: 'center'
})


export default ({ chatroom, onEnter, user }) => (
  <Link to={`${chatroom._id}`}>
    {/* <Paper
      style={{ maxWidth: 300, marginBottom: 40 }}
      zDepth={5}
    >
      <Wrapper onClick={onEnter}>
        <Card>
          <CardMedia
            overlay={
              <CardTitle
                title={chatroom.participants[0]._id != user._id ? chatroom.participants[0].info.fullName : chatroom.participants[1].info.fullName}
                style={getCardTitleStyle()}
              />
            }
          >
            <img src={chatroom.avatar ? chatroom.avatar : "../../../assets/default-avatar.png"} alt="" />
          </CardMedia>
        </Card>
      </Wrapper>
    </Paper> */}
    <ListItemWrapper  onClick={onEnter}>
      <AvatarWrapper src={
        chatroom.participants.length > 1 ? (
        chatroom.participants[0].avatar != user.avatar ? chatroom.participants[0].avatar :  chatroom.participants[1].avatar )
        : (chatroom.participants[0].avatar )
        } />
      <ListItemTextWrapper 
      primary={
        chatroom.participants.length > 1 ? (
        chatroom.participants[0]._id != user._id ? chatroom.participants[0].info.fullName :   chatroom.participants[1].info.fullName)
        : ( chatroom.participants[0].info.fullName)
      } 
      secondary={chatroom.lastMessage ? chatroom.lastMessage +'-' + moment(chatroom.createdAt).format(' h:mm:ss a YYYY/MM/DD ') : `You are now connected on YOU MEET ME` } 
      />
    </ListItemWrapper>
  </Link>
)
// 