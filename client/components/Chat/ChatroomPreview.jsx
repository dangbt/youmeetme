import React from 'react';
import styled from 'styled-components'
import Paper from 'material-ui/Paper';
import { Card, CardMedia, CardTitle } from 'material-ui/Card';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const ListItemWrapper = styled(ListItem)`
  cursor: pointer;
  border-bottom: 1px solid black;
`

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
      <Avatar src={chatroom.avatar ? chatroom.avatar : "../../../assets/default-avatar.png"} />
      <ListItemText primary={chatroom.participants[0]._id != user._id ? chatroom.participants[0].info.fullName : chatroom.participants[1].info.fullName} secondary="Jan 9, 2014" />
    </ListItemWrapper>
  </Link>
)
